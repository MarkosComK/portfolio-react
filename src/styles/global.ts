import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: "Roboto";
    }

    button, input[type="submit"], input[type="reset"] {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    
    html{
        overflow-y: hidden;
        overflow-x: hidden;
        color: var(--font-color);
    }

    :root {
        --font-color: #f9fafb;
        --theme-bg-color: rgba(16, 18, 27, 0.4);
        --border-color: rgba(113, 119, 144, 0.25);
        --theme-color: #f9fafb;
        --inactive-color: rgb(113, 119, 144, 0.78);
        --body-font: "Poppins", sans-serif;
        --hover-menu-bg: rgba(12, 15, 25, 0.3);
        --content-title-color: #999ba5;
        --content-bg: rgb(146, 151, 179, 0.13);
        --button-inactive: rgb(249, 250, 251, 0.55);
        --dropdown-bg: #21242d;
        --dropdown-hover: rgb(42 46 60);
        --popup-bg: rgb(22 25 37);
        --search-bg:  #14162b;
        --overlay-bg: rgba(36, 39, 59, 0.3);
        --scrollbar-bg: rgb(1, 2, 3, 0.4);
        --red-btn: #ff6057;
        --yellow-btn: #febc2e;
        --green-btn: #28c841;
        /* Glass effect */
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        /* border radius */
        border-radius: 14px;
        /* WeatherApp */
        --dark-blue: rgba(11,12,30, 0.7);
        --light-blue: rgba(29,147,235,0.5);
        --gray: #85858e;
    }
    
    `