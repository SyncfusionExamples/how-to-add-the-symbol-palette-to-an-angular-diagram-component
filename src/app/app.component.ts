import { Component } from '@angular/core';
import { ConnectorModel, NodeModel, PaletteModel, SymbolPreviewModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-diagram';

  public symbolPreviewSettings: SymbolPreviewModel = {
    height: 250,
    width: 250,
    offset: {
      x: 0.5,
      y: 0.5
    }

  }
  
  public paletteExpandingAction(args: any){
    if(args.palette.id === 'flow') {
      args.cancel = true;
    }
  }
  public symbolPalette: PaletteModel[] = [
    {
     id: 'basic',
     expanded: false,
      symbols: this.getBasicShapes(),
      title: 'Basic Shapes'
    },
    {
      id: 'flow',
      symbols: this.getFlowShapes(),
      title: 'Flow Shapes'
    },
    {
      id: 'connectors',
      symbols: this.getConnectors(),
      title: 'Connectors'
    }
  ];
  public getFlowShapes(): NodeModel[] {
    let flowshapes: NodeModel[] = [
      { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
      { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
      { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
      { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } }
    ];
    return flowshapes;

  }
  public getConnectors(): ConnectorModel[] {
    let connectors: ConnectorModel[] = [
      {
        id: 'Link1',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' }
      },
      {
        id: 'Link2',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' }
      },
      {
        id: 'Link3',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow'}
      }
    ];
    return connectors; 
  }
  public getBasicShapes(): NodeModel[] {
    let basicshapes: NodeModel[] = [
      { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' }},
      { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
      { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
      { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } }
    ];
    return basicshapes;

  }
 }
