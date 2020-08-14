import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container root">
      <app-nav></app-nav>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
    `,
})
export class RootComponent implements OnInit {

  constructor() {
    // -- Send statistic to backend --
    /*this.http.get<AppEnv>(`/env.json?no-cache=${(new Date()).getTime()}`).subscribe(env => {
      const { build_date: buildDate, vcs_ref: vcsRef, digest_image: digestImage, version } = env;

      info(`version => ${version} image => ${digestImage} buildDate => ${buildDate} gitHash => ${vcsRef}`);
      this.http.post<Stat>(`${apiUrl}/stat`, { language, timezone, digestImage, version })
        .subscribe(stat => debug('stat => ', stat));
    });*/
  }

  ngOnInit(): void { }
}
