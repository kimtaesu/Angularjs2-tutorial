import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {FactoryProviderComponent} from "./di/factory-provider/factory-provider.component";
import {ValueProviderComponent} from "./di/value-provider/value-provider.component";
import {WithoutDiComponent} from "./di/without-di/without-di.component";
import {OpaqueTokenComponent} from "./di/opaque-token/opaque-token.component";
import {InterpolationComponent} from "./template/interpolation/interpolation.component";
import {OnewayStatementComponent} from "./template/oneway-statement/oneway-statement.component";
import {MyClickDirective} from "./template/oneway-statement/my-click.directive";
import {ContactComponent} from "./template/oneway-statement/contact.component";
import {OnewayExpressionComponent} from "./template/oneway-expression/oneway-expression.component";
import {TwowayNgmodelComponent} from "./template/twoway-ngmodel/twoway-ngmodel.component";
import {NgstyleComponent} from "./template/ngstyle/ngstyle.component";
import {NgifComponent} from "./template/ngif/ngif.component";
import {NgswitchComponent} from "./template/ngswitch/ngswitch.component";
import {NgForComponent} from "./template/ngfor/ngfor.component";
import {TemplateReferenceVariablesComponent} from "./template/template-reference-variables/template-reference-variables.component";
import {NgclassComponent} from "./template/ngclass/ngclass.component";
import {TemplateInputVariablesComponent} from "./template/template-input-variables/template-input-variables.component";
import {TemplateNgforComponent} from "./template/template-ngfor/template-ngfor.component";
import {FormGroupComponent} from "./form/form-group/form-group.component";
import {FormStatusComponent} from "./form/form-status/form-status.component";
import {BuiltInValidatorComponent} from "./form/built-in-validator/built-in-validator.component";
import {FormReferenceVariableComponent} from "./form/form-reference-variable/form-reference-variable.component";
import {CustomValidatorsComponent} from "./form/custom-validators/custom-validators.component";
import {ElementStatusComponent} from "./form/element-status/element-status.component";

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
    FactoryComponent, ReflectiveInjectorComponent, ClassProviderComponent,
    FactoryProviderComponent,
    ValueProviderComponent,
    WithoutDiComponent, OpaqueTokenComponent, OptionalDecoratorComponent,

  //  Template
    InterpolationComponent,
    OnewayStatementComponent,
    ContactComponent, MyClickDirective,
    OnewayExpressionComponent, TwowayNgmodelComponent,
    NgclassComponent, NgstyleComponent, NgifComponent, NgswitchComponent, NgForComponent,
    TemplateInputVariablesComponent, TemplateReferenceVariablesComponent,
    TemplateNgforComponent,

    // Form
    FormGroupComponent, FormStatusComponent,
    BuiltInValidatorComponent, FormReferenceVariableComponent, CustomValidatorsComponent, ElementStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
