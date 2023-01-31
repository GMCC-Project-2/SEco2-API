exports.Home = (req, res) => {
  return res.send({
    Bootcamp: "Skills City Software Engineering",
    CohortNumber: "SE2P2",
    ProjectName:
      "Infrastructure Development for Data Storage, Processing & Analysis Automation using Python & SQL–HMRC",
    ClientOrganisation: "Greater Manchester Chamber of Commerce (GMCC)",
    ProjectCoordinator: "Xavier Alexander",
    ProjectTeamMembers: [
      "Sumaya Khan",
      "Sandy Williams",
      "Phoenix Warburton",
      "Neelam Ahmed",
      "Bruna Stephane da Silva",
    ],
  });
};
