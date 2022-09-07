import { OperationalHour } from '..'

export interface Dealer {
    id: number;
    title: string;
    slug: string;
    company: string;
    address: string;
    phone: string;
    province: string;
    city: string;
    fax: unknown;
    website: unknown;
    latitude: string;
    longitude: string;
    car_type: string;
    bengkel_available: boolean;
    bengkel_open_status: boolean;
    bengkel_operational_hours: OperationalHour[];
    showroom_available: boolean;
    showroom_open_status: boolean;
    showroom_operational_hours: OperationalHour[];
    distance_km: number;
    services: string[];
    car_types: string[];
    status: string;
}


