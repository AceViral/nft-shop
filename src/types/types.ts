export interface IProduct {
   quantity_available: number;
   quantity_nfts_created: number;
   product_id: number;
   name: string;
   json_nft_data: { external_url: string };
   created_by: { display_name: string };
   initial_price: number;
}
export interface CardProps {
   url: string;
   cardName: string;
   authorName: string;
   available: number;
   quantity: number;
   price: number;
}
