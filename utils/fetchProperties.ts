import Papa from 'papaparse';

export interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    status: string;
    specs: string;
    image: string;
    tag: string;
}

export async function fetchProperties(): Promise<Property[]> {
    const sheetUrl = process.env.NEXT_PUBLIC_SHEET_URL;

    if (!sheetUrl) {
        console.warn("No Google Sheet URL found in env.");
        return [];
    }

    try {
        const response = await fetch(sheetUrl);
        const csvText = await response.text();

        return new Promise((resolve) => {
            Papa.parse(csvText, {
                header: true,
                complete: (results: Papa.ParseResult<any>) => {
                    const data = results.data as any[];
                    // Filter out empty rows and map to Property interface
                    const properties = data
                        .filter(row => row.id && row.title)
                        .map(row => ({
                            id: Number(row.id),
                            title: row.title,
                            location: row.location,
                            price: row.price,
                            status: row.status,
                            specs: row.specs,
                            image: row.image,
                            tag: row.tag
                        }));
                    resolve(properties);
                },
                error: (error: any) => {
                    console.error("Error parsing CSV:", error);
                    resolve([]);
                }
            });
        });
    } catch (error) {
        console.error("Error fetching sheet:", error);
        return [];
    }
}
