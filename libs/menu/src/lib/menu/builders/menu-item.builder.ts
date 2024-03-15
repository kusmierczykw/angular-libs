import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { isNil, Nillable } from '@angular-starter-pack/nil';
import {
  RouterLink,
  RouterLinkActiveOptions,
  RouterLinkProviderService,
  RouterLinkQueryParams,
} from '@angular-starter-pack/router-link';
import { MenuItemCommand } from '../types/menu-item-command';
import { MenuItemType } from '../enums/menu-item-type';
import { RequiredMethodCallException } from '@angular-starter-pack/exception';
import { Icon } from '@angular-starter-pack/icon';

@Injectable({
  providedIn: 'root',
})
export class MenuItemBuilder {
  private _label!: Nillable<string>;
  private _type!: Nillable<MenuItemType>;
  private _routerLink: Nillable<RouterLink>;
  private _icon: Nillable<Icon>;
  private _link: Nillable<string>;
  private _visibility$: Nillable<Observable<boolean>>;
  private _children: Nillable<MenuItem[]>;
  private _command: Nillable<MenuItemCommand>;
  private _queryParams: Nillable<RouterLinkQueryParams>;
  private _routerLinkActiveOptions: Nillable<RouterLinkActiveOptions>;

  public constructor(
    private readonly routerLinkProvider: RouterLinkProviderService,
  ) {
    this.reset();
  }

  public newInstance(): MenuItemBuilder {
    return new MenuItemBuilder(this.routerLinkProvider);
  }

  public from(item: MenuItem): MenuItemBuilder {
    const builder = this.newInstance();

    builder._label = item.label;
    builder._type = item.type;
    builder._routerLink = item.routerLink;
    builder._link = item.link;
    builder._visibility$ = item.visibility$;
    builder._icon = item.icon;
    builder._children = item.children;
    builder._command = item.command;
    builder._queryParams = item.queryParams;
    builder._routerLinkActiveOptions = item.routerLinkActiveOptions;

    return builder;
  }

  public reset(): this {
    this._label = null;
    this._type = null;
    this._icon = null;
    this._routerLink = null;
    this._link = null;
    this._children = null;
    this._command = null;
    this._queryParams = null;
    this._routerLinkActiveOptions = null;
    this._visibility$ = null;

    return this;
  }

  public initRouterLink(
    routerLink: (provider: RouterLinkProviderService) => RouterLink,
  ): this {
    return this.type(MenuItemType.RouterLink).routerLink(
      routerLink(this.routerLinkProvider),
    );
  }

  public initMore(children: (builder: MenuItemBuilder) => MenuItem[]): this {
    return this.type(MenuItemType.More).children((builder) =>
      children(builder),
    );
  }

  public initLink(link: string): this {
    return this.type(MenuItemType.Link).link(link);
  }

  public initCommand(command: MenuItemCommand): this {
    return this.type(MenuItemType.Command).command(command);
  }

  public routerLinkQueryParams(params: RouterLinkQueryParams): this {
    this._queryParams = params;

    return this;
  }

  public routerLinkActiveOptions(
    routerLinkActiveOptions: RouterLinkActiveOptions,
  ): this {
    this._routerLinkActiveOptions = routerLinkActiveOptions;

    return this;
  }

  public routerLinkActiveSkipExact(): this {
    return this.routerLinkActiveOptions({ exact: false });
  }

  public label(label: string): this {
    this._label = label;

    return this;
  }

  public type(type: MenuItemType): this {
    this._type = type;

    return this;
  }

  public routerLink(routerLink: RouterLink): this {
    this._routerLink = routerLink;

    return this;
  }

  public link(link: string): this {
    this._link = link;

    return this;
  }

  public icon(icon: Icon): this {
    this._icon = icon;

    return this;
  }

  public children(factory: (builder: MenuItemBuilder) => MenuItem[]): this {
    this._children = factory(this.newInstance());

    return this;
  }

  public visibility(visibility$: Observable<boolean>): this {
    this._visibility$ = visibility$;

    return this;
  }

  public command(command: MenuItemCommand): this {
    this._command = command;

    return this;
  }

  public build(): MenuItem {
    this.requireLabel();
    this.requireType();
    this.configureDefaultVisibility();
    this.configureDefaultRouterLinkActiveOptions();

    if (this.isRouterLink()) {
      this.requireRouterLink();
    }

    if (this.isLink()) {
      this.requireLink();
    }

    if (this.isCommand()) {
      this.requireCommand();
    }

    if (this.isMore()) {
      this.requireChildren();
    }

    const item = new MenuItem(
      this._label!,
      this._type!,
      this._visibility$!,
      this._routerLinkActiveOptions!,
      this._icon,
      this._routerLink,
      this._link,
      this._children,
      this._command,
      this._queryParams,
    );

    this.reset();

    return item;
  }

  private requireLabel(): void {
    if (isNil(this._label)) {
      throw new RequiredMethodCallException(this.label.name);
    }
  }

  private requireType(): void {
    if (isNil(this._type)) {
      throw new RequiredMethodCallException(this.type.name);
    }
  }

  private requireRouterLink(): void {
    if (isNil(this._routerLink)) {
      throw new RequiredMethodCallException(this.routerLink.name);
    }
  }

  private requireLink(): void {
    if (isNil(this._link)) {
      throw new RequiredMethodCallException(this.link.name);
    }
  }

  private requireCommand(): void {
    if (isNil(this._command)) {
      throw new RequiredMethodCallException(this.command.name);
    }
  }

  private requireChildren(): void {
    if (isNil(this._children)) {
      throw new RequiredMethodCallException(this.children.name);
    }
  }

  private isRouterLink(): boolean {
    return this._type === MenuItemType.RouterLink;
  }

  private isLink(): boolean {
    return this._type === MenuItemType.Link;
  }

  private isCommand(): boolean {
    return this._type === MenuItemType.Command;
  }

  private isMore(): boolean {
    return this._type === MenuItemType.More;
  }

  private configureDefaultVisibility(): void {
    if (!isNil(this._visibility$)) {
      return;
    }

    this.visibility(of(true));
  }

  private configureDefaultRouterLinkActiveOptions(): void {
    if (!isNil(this._routerLinkActiveOptions)) {
      return;
    }

    this.routerLinkActiveOptions({
      exact: true,
    });
  }
}
export { MenuItem };
