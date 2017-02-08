import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ChildToParentComponent} from "./component/child-to-parent/child-to-parent.component";
import {ChildComponent} from "./component/child-to-parent/child.component";
import {ChildInputComponent} from "./component/parent-to-child-input/child-input.component";
import {ParentToChildInputComponent} from "./component/parent-to-child-input/parent-to-child-input.component";
import {ChildInputsComponent} from "./component/parent-to-child-inputs/child-inputs.component";
import {ParentToChildInputsComponent} from "./component/parent-to-child-inputs/parent-to-child-inputs.component";
import {ViewchildComponent, ItemComponent, Item} from "./component/viewchild/viewchild.component";
import {ViewchildrenComponent, ChildCmp} from "./component/viewchildren/viewchildren.component";
import {
  ButtonGroup,
  GroupTitle,
  childButtonCmp,
  ContentChildComp
} from "./component/contentchild/contentchild.component";
import {WordGroup, Word, ContentChildrenComp} from "./component/contentchildren/contentchildren.component";
import {NestedChildComponent} from "./component/nested-component/child.component";
import {NestedParentComponent} from "./component/nested-component/parent.component";
import {NestedGrandsonComponent} from "./component/nested-component/grandson.component";
import {OptionalDecoratorComponent} from "./di/optional-decorator/optional-decorator.component";
import {FactoryComponent} from "./di/factory/factory.component";
import {ReflectiveInjectorComponent} from "./di/reflective-injector/reflective-injector.component";
import {ClassProviderComponent} from "./di/class-provider/class-provider.component";
import {AliasedClassProviderComponent} from "./di/class-provider/aliased-class-provider.component";
import {FactoryProviderComponent} from "./di/factory-provider/factory-provider.component";
import {ValueProviderComponent} from "./di/value-provider/value-provider.component";
import {WithoutDiComponent} from "./di/without-di/without-di.component";
import {OpaqueTokenComponent} from "./di/opaque-token/opaque-token.component";

@NgModule({
  declarations: [
    AppComponent,
    // Component
    NestedChildComponent, NestedParentComponent, NestedGrandsonComponent,
    ChildToParentComponent, ChildComponent,
    ChildInputComponent, ParentToChildInputComponent,
    ChildInputsComponent, ParentToChildInputsComponent,
    ViewchildComponent, ItemComponent, Item,
    ViewchildrenComponent, ChildCmp,
    ButtonGroup, GroupTitle, childButtonCmp, ContentChildComp,
    WordGroup, Word, ContentChildrenComp,

    //  Factory
    FactoryComponent, ReflectiveInjectorComponent, ClassProviderComponent, AliasedClassProviderComponent,
    FactoryProviderComponent,
    ValueProviderComponent,
    WithoutDiComponent, OpaqueTokenComponent, OptionalDecoratorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
