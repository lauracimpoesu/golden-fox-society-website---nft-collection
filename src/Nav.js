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
      {/* left side - social media icons */}
      <Flex justify="space-around" width="40%" padding="0 75px">
        {/*         <Link href="https://www.facebook.com">
          <Image src={Facebook} boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.twitter.com">
          <Image src={Twitter} boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.gmail.com">
          <Image src={Email} boxSize="42px" margin="0 15px" />
        </Link> */}
      </Flex>

      {/* right side - sections and connect */}
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
          className="connection-nav"
        >
          CONNECT WALLET
        </Button>
      )}
    </Flex>
  )
}

export default Nav
