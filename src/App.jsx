import React from "react";
// import { Counter } from './features/counter/Counter';
import { Stack } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { MessengerChat } from "react-messenger-chat-plugin";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";
import "./App.css";
import "./font.css";
import HomePage from "./page/HomePage";

const queryClient = new QueryClient();

function App() {
  const { isDarkMode } = useSelector((state) => state?.darkMode);

  const [currentWindowWidth, setCurrentWindowWidth] = React.useState(
    window.innerWidth
  );

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "tablet",
    });
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setCurrentWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <QueryClientProvider client={queryClient}>
      <Stack component={"main"} bgcolor={isDarkMode ? "#0D0D0D" : "#fff"}>
        <HomePage />
        <MessengerChat
          pageId={process.env.REACT_APP_PAGE_ID}
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          language="en_US"
          themeColor={"#000000"}
          bottomSpacing={300}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={"show"}
          debugMode={true}
          onMessengerShow={() => {
            console.log("onMessengerShow");
          }}
          onMessengerHide={() => {
            console.log("onMessengerHide");
          }}
          onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
          }}
          onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
          }}
          onMessengerMounted={() => {
            console.log("onMessengerMounted");
          }}
          onMessengerLoad={() => {
            console.log("onMessengerLoad");
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}

export default App;
