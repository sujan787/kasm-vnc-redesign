// types/cloudcannon.d.ts

interface CloudCannon {
    value: () => Promise<any>;
    [key: string]: any; // For flexibility, as CloudCannon's API may have additional methods
}

interface Window {
    CloudCannon: CloudCannon | undefined;
}