//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    struct Campaign {
        string title;
        string description;
        address beneficiary;
        uint256 goal;
        uint256 deadline;
        uint256 amountRaised;
    }

    Campaign[] public campaigns;

    event CampaignCreated(uint256 campaignId);
    event DonationReceived(uint256 campaignId, address donor, uint256 amount);
    event CampaignEnded(uint256 campaignId, address beneficiary, uint256 amountRaised);

    function createCampaign(string memory _title, string memory _description, address _beneficiary, uint256 _goal, uint256 _duration) public {
        require(_goal > 0, "Goal must be greater than zero");
        require(_duration > 0, "Duration must be greater than zero");

        uint256 deadline = block.timestamp + _duration;

        campaigns.push(Campaign(_title, _description, _beneficiary, _goal, deadline, 0));

        emit CampaignCreated(campaigns.length - 1);
    }

    function donateToCampaign(uint256 _campaignId) public payable {
        Campaign storage campaign = campaigns[_campaignId];
        require(block.timestamp <= campaign.deadline, "Campaign has ended");
        require(msg.value > 0, "Donation amount must be greater than zero");

        campaign.amountRaised += msg.value;

        emit DonationReceived(_campaignId, msg.sender, msg.value);
    }

    function endCampaign(uint256 _campaignId) public {
        Campaign storage campaign = campaigns[_campaignId];
        require(block.timestamp > campaign.deadline, "Campaign has not ended");

        payable(campaign.beneficiary).transfer(campaign.amountRaised);

        emit CampaignEnded(_campaignId, campaign.beneficiary, campaign.amountRaised);
    }
}
