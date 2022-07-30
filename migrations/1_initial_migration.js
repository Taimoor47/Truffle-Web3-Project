const Migrations = artifacts.require("Person");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
