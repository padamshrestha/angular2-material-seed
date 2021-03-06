import { Component, ViewEncapsulation } from '@angular/core';
import { MdIconRegistry } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'md-icon-demo',
  templateUrl: 'icon-demo.html',
  styleUrls: ['icon-demo.css'],
  viewProviders: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None,
})
export class IconDemoComponent {
  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry
        .addSvgIcon('thumb-up', '/assets/svg/thumbup-icon.svg')
        .addSvgIconSetInNamespace('core', '/assets/svg/core-icon-set.svg')
        .registerFontClassAlias('fontawesome', 'fa');
  }
}
