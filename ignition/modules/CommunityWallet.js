const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CommunityWalletModule", (m) => {
  // constructor argument
  const approveThreshold = m.getParameter("approveThreshold", 3);

  const communityWallet = m.contract("CommunityWallet", [
    approveThreshold,
  ]);

  return { communityWallet };
});
