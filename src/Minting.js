import { useState } from "react"
import { ethers, BigNumber } from "ethers"
import goldenFoxNFT from "./GoldenFoxNFT.json"
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"

const goldenFoxNFTaddress = "0xAcc1AdEd319C2EB148D0770fD37F60f02264dFF8"

const Minting = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1)
  const isConnected = Boolean(accounts[0])

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        goldenFoxNFTaddress,
        goldenFoxNFT.abi,
        signer
      )
      try {
        const response = await contract.mint(BigNumber.from(mintAmount))
        console.log("response: ", response)
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }

  const handleDrecrement = () => {
    if (mintAmount <= 1) return
    setMintAmount(mintAmount - 1)
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return
    setMintAmount(mintAmount + 1)
  }

  return (
    /*   <div>
    <h1>Golden Fox</h1>
    <p>
      It's 2078. Can the Golden Fox NFT save humans from destructive rampant NFT speculation?
      Mint GoldenFox to find out.
    </p>
    {isConnected ? (
      <div>
        <div>
          <button onClick={handleDrecrement}>-</button>
          <input type="number" value={mintAmount} />
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleMint}>MINT NOW</button>
      </div>
    ) : (
      <p>You must be connected to Mint.</p>
    )}
  </div> */

    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="600px">
        <div>
          <Text fontSize="42px" fontWeight="bold" className="main-title">
            The Golden Fox Society
          </Text>
          <Text
            fontSize="20px"
            color="white"
            letterSpacing="-5.5%"
            fontFamily="inherit"
            className="text"
          >
            The Golden Fox Society was built for the purpose of expanding
            humankind's vision of the future the present we live today. We live
            in a society wants to enslave us. Now it's time to break FREE. Mint
            now to come on the boat with us.
          </Text>{" "}
          <br />
          <br />
        </div>

        {isConnected ? (
          <div>
            <Flex align="center" justify="center">
              <Button className="button-calc" onClick={handleDrecrement}>
                -
              </Button>
              <Input
                readOnly
                fontFamily="inherit"
                type="number"
                value={mintAmount}
                className="input-mint"
              />

              <Button
                className="button-calc"
                fontFamily="inherit"
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>

            <Button
              cursor="pointer"
              fontFamily="inherit"
              onClick={handleIncrement}
              className="now-mint"
            >
              MINT NOW
            </Button>
          </div>
        ) : (
          <p className="connection" color="white">
            You must be connected to Mint.
          </p>
        )}
      </Box>
    </Flex>
  )
}

export default Minting
