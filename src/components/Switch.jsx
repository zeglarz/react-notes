import React from 'react';
import { StyledSwitch } from '../styles/Switch';
import { motion } from 'framer-motion';
import Moon from '../styles/moon';
import Sun from '../styles/sun';

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
};

const Switch = (props) => {
    return (
        <StyledSwitch data-isOn={props.isOn} onClick={props.toggleSwitch}>
            <motion.div
                layout
                transition={spring}
                whileTap={{ width: 33, textAlign: 'center', scale: 1.05 }}
            >
                {!props.isOn ? <Sun/> : <Moon/>}
            </motion.div>
        </StyledSwitch>);
};

export default Switch;
