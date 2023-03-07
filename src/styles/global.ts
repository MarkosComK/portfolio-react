import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: "Roboto";
        color: var(--font-color);
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
    }

    :root {
        --font-color: #f9fafb;
        --theme-bg-color: rgba(16 18 27 / 40%);
        --border-color: rgba(113 119 144 / 25%);
        --theme-color: #f9fafb;
        --inactive-color: rgb(113 119 144 / 78%);
        --body-font: "Poppins", sans-serif;
        --hover-menu-bg: rgba(12 15 25 / 30%);
        --content-title-color: #999ba5;
        --content-bg: rgb(146 151 179 / 13%);
        --button-inactive: rgb(249 250 251 / 55%);
        --dropdown-bg: #21242d;
        --dropdown-hover: rgb(42 46 60);
        --popup-bg: rgb(22 25 37);
        --search-bg:  #14162b;
        --overlay-bg: rgba(36, 39, 59, 0.3);
        --scrollbar-bg: rgb(1 2 3 / 40%);
        --red-btn: #ff6057;
        --yellow-btn: #febc2e;
        --green-btn: #28c841;
        /* Glass effect */
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        /* border radius */
        border-radius: 14px;
    }
    
    `