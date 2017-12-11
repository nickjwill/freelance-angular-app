export class Proposal {
	constructor(
		public id?: number,
		public customer?: string,
		public portfolio_url: string = 'http://',
		public tools?: number,
		public estimated_hours?: number,
		public weeks_to_complete?: number,
		public client_email?: string,
	) {}
}


