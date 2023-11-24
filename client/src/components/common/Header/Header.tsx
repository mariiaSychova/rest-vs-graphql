import React, { FC } from 'react'
import { HeaderCon } from './Header'
import { useIsAuthenticated, useMsal } from '@azure/msal-react';

interface Props {
    handleLogin?: () => void
}

const Header: FC<Props> = ({ handleLogin }) => {
    const {instance, accounts} = useMsal()

    const isAuthenticated = useIsAuthenticated()

    const handleLogout = () => {
        instance.logoutRedirect({
            logoutHint: accounts[0].idTokenClaims?.login_hint,
            account: accounts[0],
            onRedirectNavigate: (url) => false,
        })
    }

    return <HeaderCon>
        {
            isAuthenticated ?
                <>
                    Admin
                    <button onClick={handleLogout}>Logout</button>
                </>
                :
                <>
                    User
                    <button onClick={handleLogin}>Login</button>
                </>
        }
    </HeaderCon>
}

export default Header