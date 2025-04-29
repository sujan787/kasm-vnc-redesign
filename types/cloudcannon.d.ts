interface CloudCannonData {
    title: string;
    subtitle: string;
    description: string;
  }
  
  interface CloudCannon {
    value: () => Promise<CloudCannonData>;
    [key: string]: any;
  }
  
  interface Window {
    CloudCannon: CloudCannon | undefined;
  }