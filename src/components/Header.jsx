import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import { StyledHeader } from "../styles/Header";
import { Switch } from "../styles/Switch";
import { motion } from "framer-motion";
import Moon from "../styles/moon";
import Sun from "../styles/sun";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

function Header(props) {
    return (
        <StyledHeader>
            <h1>
                <CreateIcon className="logo" />
                Rememberify
            </h1>
            <Switch data-isOn={props.isOn} onClick={props.toggleSwitch}>
                <motion.div
                    layout
                    transition={spring}
                    whileTap={{ width: 33, textAlign: "center" }}
                >
                    {!props.isOn ? <Sun /> : <Moon />}
                </motion.div>
            </Switch>
        </StyledHeader>
    );
}

export default Header;
