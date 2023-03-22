export default class {
	constructor(image = null, title, description, tags = [], repository = '', externalLink = '') {
		this.image = image;
		this.title = title;
		this.description = description;
		this.tags = tags;
		this.repository = repository;
		this.externalLink = externalLink;
	}
}