let auth0Client = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();
  
    auth0Client = await auth0.createAuth0Client({
      domain: config.domain,
      clientId: config.clientId
    });
};

window.onload = async () => {
  await configureClient();

  const bodyElement = document.getElementsByTagName("body")[0];

  // Listen out for clicks on any hyperlink that navigates to a #/ URL
  // bodyElement.addEventListener("click", (e) => {
  //   if (isRouteLink(e.target)) {
  //     const url = e.target.getAttribute("href");
  //   }
  // });

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    console.log("> User is authenticated");
    window.history.replaceState({}, document.title, window.location.pathname);
    updateUI();
    return;
  }

  // console.log("> User not authenticated");

  const query = window.location.search;
  const shouldParseResult = query.includes("code=") && query.includes("state=");

  if (shouldParseResult) {
    console.log("> Parsing redirect");
    try {
      const result = await auth0Client.handleRedirectCallback();

      console.log("Logged in!");
      window.location.href = "https://ratselhaft01.github.io/Hackathon-2023/home";
      
    } catch (err) {
      console.log("Error parsing redirect:", err);
    }

    window.history.replaceState({}, document.title, "/");
  }

  updateUI();
};

// NEW
const updateUI = async () => {
    const isAuthenticated = await auth0Client.isAuthenticated();

    // document.getElementById("btn-logout").disabled = !isAuthenticated;
    // document.getElementById("btn-login").disabled = isAuthenticated;
    
    // if (isAuthenticated) {
    //     document.getElementById("gated-content").classList.remove("hidden");
    
    //     document.getElementById(
    //       "ipt-access-token"
    //     ).innerHTML = await auth0Client.getTokenSilently();
    
    //     document.getElementById("ipt-user-profile").textContent = JSON.stringify(
    //       await auth0Client.getUser()
    //     );
    
    // } else {
    // document.getElementById("gated-content").classList.add("hidden");
    //   return;
    // }
};

const login = async (targetUrl) => {
    try {
      console.log("Logging in", targetUrl);
  
      const options = {
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      };
  
      if (targetUrl) {
        options.appState = { targetUrl };
        // window.location.href = 'home.html';
      }
  
      await auth0Client.loginWithRedirect(options);
    } catch (err) {
      console.log("Log in failed", err);
    }
};

const logout = () => {
    auth0Client.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
};