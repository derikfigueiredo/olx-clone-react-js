import React from "react";
import { TitleArea } from "../../Components/MainComponents";
import { SignInArea } from "./styled";

export const Signin = () => {
    return(
        <SignInArea>
            <TitleArea>Sign In</TitleArea>
            <div className="sign-in-container">
                    <form>
                        <label className="area">
                            <div className="title-area">Email</div>
                            <div className="input-area">
                                <input type="email"/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="title-area">Senha</div>
                            <div className="input-area">
                                <input type="password"/>
                            </div> 
                        </label>
                        <label className="area">
                            <div className="title-area">Lembrar Senha</div>
                            <div className="input-area"><input type="checkbox" /> </div>
                        </label>
                    <button>Fazer Login</button>
                    </form>
            </div>
        </SignInArea>
    )
}