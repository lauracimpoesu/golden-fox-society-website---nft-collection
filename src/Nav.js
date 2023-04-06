import React from "react"
import { Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0])

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      setAccounts(accounts)
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="30px">
      <Flex justify="space-around" width="40%" padding="0 75px">
      </Flex>
      <Flex justify="space-around" align="center" width="40%" padding="30px">
        <Box margin="0 25px" className="main-nav">
          ABOUT
        </Box>
        <Spacer />
        <Box margin="0 25px" className="main-nav">
          MINT
        </Box>
        <Spacer />
        <Box margin="0 25px" className="main-nav">
          TEAM
        </Box>
        <Spacer />
      </Flex>
      {isConnected ? (
        <Box margin="0 25px">Connected </Box>
      ) : (
        <Button
          onClick={connectAccount}
          color="fuchsia"
          border="none"
          borderRadius="50px"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          fontWeight="bold"
          className="connection-nav" >
          CONNECT WALLET
        </Button>
      )}
    </Flex>
  )
}

export default Nav