import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const RewardModule = buildModule("RewardModule", (m) => {
  const tokenAddress = "";

  const reward = m.contract("Reward", [tokenAddress]);

  return { reward };
});

export default RewardModule;
