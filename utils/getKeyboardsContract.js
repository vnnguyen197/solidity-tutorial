import { ethers } from "ethers"
import abi from "../utils/Keyboards.json"

const contractAddress = '0xc123FABB0b63D61BdC73B202A360ca62cc3A8Fb3';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}