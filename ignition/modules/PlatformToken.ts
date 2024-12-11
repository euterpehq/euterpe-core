import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const PlatformTokenModule = buildModule("PlatformTokenModule", (m) => {
  const platformToken = m.contract("PlatformToken", [
    "Euterpe",
    "EUT",
    parseEther("1000000000"),
  ]);

  return { platformToken };
});

export default PlatformTokenModule;
