import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import '../../assets/css/header.css';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as ChevronUp } from '../../assets/imgs/chevron-up-outline.svg'

export default function Header(props) {

    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    const redirectToHome = () => {
        window.location.href = '/';
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar className='header-config'>
                    <Toolbar>
                        <img onClick={redirectToHome} className='logo-config' src='https://files.readme.io/29c6fee-blue_short.svg' alt="logo" />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                {props.children}
                <ScrollToTop
                    component={<ChevronUp />}
                    smooth />
            </Container>
        </React.Fragment>
    );
}