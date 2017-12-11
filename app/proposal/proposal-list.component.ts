import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'https://portfolio.nickwilliams.com', 'Ruby on Rails', 150, 120, 15, 'nick@test.com')
	proposalTwo: Proposal = new Proposal(100, 'cool Company', 'https://portfolio.nickwilliams.com', 'Ruby on Rails', 150, 120, 15, 'nick@test.com')
	proposalThree: Proposal = new Proposal(150, 'Dude Company', 'https://portfolio.nickwilliams.com', 'Ruby on Rails', 150, 120, 15, 'nick@test.com')
  
  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
    ]
}