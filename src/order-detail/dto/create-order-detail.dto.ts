export class CreateOrderDetailDto {
    readonly order_id: number;
    readonly order_detail_partname: number;
    readonly order_detail_price: number;
    readonly order_detail_qty: number;
    readonly order_detail_total: number;
}
