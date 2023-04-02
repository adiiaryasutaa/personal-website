export default class {
	constructor(image = null, titleLocale, descriptionLocale, tags = [], repository = null, externalLink = null) {
		this.image = image;
		this.titleLocale = titleLocale;
		this.descriptionLocale = descriptionLocale;
		this.tags = tags;
		this.repository = repository;
		this.externalLink = externalLink;
	}
}