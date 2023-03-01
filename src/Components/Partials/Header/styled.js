import styled from "styled-components";

export const HeaderArea = styled.div`
    background-color: #FFF;
    height: 60px;
    border-bottom: 1px solid #CCC;
    margin-bottom: 20px;
    
    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo-area {
        span {
            font-weight: bold;
            font-size: 27px;
        }
        .logo-o {color: #FF0000;}
        .logo-l {color: #00FF00;}
        .logo-x {color: #0000FF;}
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
    }

    ul li {
        margin-right: 20px;
        margin-left: 20px;
        font-size: 15px;
    }

    ul li a {
        color: #000;

        &:hover {
            color: #CCC;
        }

        &.button {
            background-color: #FF8100;
            color: #FFF;
            padding: 5px 10px;
            border-radius: 3px
        }

        &.button:hover {
                background-color: #E57706;
        }
    }

    
`