import ko from 'ko';
import { Capa } from 'Common/Enums';

class CapaAdminStore {
	constructor() {
		ko.addObservablesTo(this, {
			additionalAccounts: false,
			identities: false,
			attachmentThumbnails: false,
			sieve: false,
			filters: false,
			themes: true,
			userBackground: false,
			openPGP: false,
			twoFactorAuth: false,
			twoFactorAuthForce: false,
			templates: false
		});
	}

	populate() {
		let capa = rl.settings.capa;
		this.additionalAccounts(capa(Capa.AdditionalAccounts));
		this.identities(capa(Capa.Identities));
		this.attachmentThumbnails(capa(Capa.AttachmentThumbnails));
		this.sieve(capa(Capa.Sieve));
		this.filters(capa(Capa.Filters));
		this.themes(capa(Capa.Themes));
		this.userBackground(capa(Capa.UserBackground));
		this.openPGP(capa(Capa.OpenPGP));
		this.twoFactorAuth(capa(Capa.TwoFactor));
		this.twoFactorAuthForce(capa(Capa.TwoFactorForce));
		this.templates(capa(Capa.Templates));
	}
}

export default new CapaAdminStore();
