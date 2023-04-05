export interface IModes {
    defaultMode: string,
    addPoints: string,
    addLine: string,
    addLineSegment: string,
    addAngle: string,
    addCongruentSymbols: string,
    addParallelSymbols: string,
    addPerpendicularSymbols: string,
    addMidpointSymbols: string,
    addBisectorSymbols: string,
    addLengthMeasure: string,
    addCircle: string,
    addArc: string,
    addSector: string,
    addShape: string
}

export const modes: IModes = {
    defaultMode: 'addPoint',
    addPoints: 'addPoint',
    addLine: 'addLine',
    addLineSegment: 'addLineSegment',
    addAngle: 'addAngle',
    addCongruentSymbols: 'addCongruentSymbols',
    addParallelSymbols: 'addParallelSymbols',
    addPerpendicularSymbols: 'addPerpendicularSymbols',
    addMidpointSymbols: 'addMidpointSymbols',
    addBisectorSymbols: 'addBisectorSymbols',
    addLengthMeasure: 'addLengthMeasure',
    addCircle: 'addCircle',
    addArc: 'addArc',
    addSector: 'addSector', 
    addShape: 'addShape'
  }