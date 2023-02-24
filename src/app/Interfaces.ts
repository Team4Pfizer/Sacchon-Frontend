export interface PatientData{
    patient: Patient;
    alarm: boolean;
    patientsDoctor: Doctor;
    bgMeasurementList: BgMeasurement[];
    dciMeasurementList: DciMeasurement[];
}

export interface Patient{
    patientId: number;
    patientFirstName: string;
    patientLastName: string;
    patientEmail: string;
}

export interface Doctor{
    doctorEmailId: string;
    doctorFirstName: string;
    doctorLastName: string;
}

export interface BgMeasurement{
    bgMeasurementId: number;
    bgMeasurementData: number;
    bgMeasurementDate: string;
    bgMeasurementTime: string;
}

export interface DciMeasurement{
    dciMeasurementId: number;
    dciMeasurementData: number;
    dciMeasurementDate: string;
    dciMeasurementTime: string;
}

export interface Consultation{
    consultationId: number;
    consultationDosage: number;
    consultationMedication: string;
    consultationDate: string;
}


export interface BgMeasurementPost{
    bgMeasurementData: number;
    bgMeasurementDate: string;
    bgMeasurementTime: string;
}

export interface DciMeasurementPost{
    dciMeasurementData: number;
    dciMeasurementDate: string;
}

