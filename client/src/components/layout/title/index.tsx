import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import { logo1 } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo1} alt="Proact" width="28px" />
                ) : (
                    <img src={logo1} alt="Proact" width="140px" />
                )}
            </Link>
        </Button>
    );
};
