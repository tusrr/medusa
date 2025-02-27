/**
 * @schema AdminProductTypeListResponse
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminProductTypeListResponse
 * required:
 *   - limit
 *   - offset
 *   - count
 *   - product_types
 * properties:
 *   limit:
 *     type: number
 *     title: limit
 *     description: The product type's limit.
 *   offset:
 *     type: number
 *     title: offset
 *     description: The product type's offset.
 *   count:
 *     type: number
 *     title: count
 *     description: The product type's count.
 *   product_types:
 *     type: array
 *     description: The product type's product types.
 *     items:
 *       $ref: "#/components/schemas/AdminProductType"
 * 
*/

