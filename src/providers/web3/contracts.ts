import icoContract from '@artifacts/contracts/EmanaICO.sol/EmanaICO.json';
import busdContract from '@artifacts/contracts/mocks/BUSDMock.sol/BUSDMock.json';
import usdtContract from '@artifacts/contracts/mocks/USDTMock.sol/USDTMock.json';
import daiContract from '@artifacts/contracts/mocks/DAIMock.sol/DAIMock.json';

export const ABI = {
  ico: icoContract.abi,
  busd: busdContract.abi,
  usdt: usdtContract.abi,
  dai: daiContract.abi,
};
