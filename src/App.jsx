import React from "react";
// import { Counter } from './features/counter/Counter';
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import "./App.css";
import "./font.css";
import HomePage from "./page/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import { MessengerChat } from "react-messenger-chat-plugin";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const { isDarkMode } = useSelector((state) => state.darkMode);

  const [currentWindowWidth, setCurrentWindowWidth] = React.useState(
    window.innerWidth
  );

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: () => window.innerWidth < 1024,
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
          pageId="109268111769502"
          appId="109268111769502"
          language="sv_SE"
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
