export interface IData {
   quantity_available: number;
   quantity_nfts_created: number;
   product_id: number;
   json_nft_data: { external_url: string; name: string };
   created_by: { display_name: string };
   initial_price: number;
}
