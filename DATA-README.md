# Viper Parts Rack America — recovered from the Internet Archive

Source: Wayback Machine captures of www.viperpartsrackamerica.com (Squirrelcart store), plus product
images from the predecessor domain www.viperpartsofamerica.com (same Squirrelcart database / product record numbers).
Nothing here is invented: every value comes from an archived page. See data/summary.json for counts.

- data/products.csv / products.json — one row per product (Squirrelcart record # = product_id).
  * archive_capture_date / wayback_url — the capture the row's main data (detail page, else listing) came from.
  * detail_capture_date / detail_wayback_url — product detail page capture (description, part #, stock).
  * listing_capture_date / listing_wayback_url — newest category-listing capture showing the product.
  * price_usd is from whichever capture is newest (price_source, price_capture_date). price_history lists changes seen.
  * stock_status / condition_keywords are as shown on the archived page, not current.
  * image_source: which domain's archive the photo came from; images_missing_urls: photos referenced but never archived.
  * internal_order_item = yes for invoice/adjustment items (hidden from the rebuilt site).
- data/pages/ — non-product pages (home notices, contact, links, testimonials, reviews, category intros) as .md + original .html.
- images/products/ — original recovered images; images/site/ — logo and theme images.
- site/ — static storefront rebuilt from the data; open site/index.html. Ordering is "Contact to order" (email).
- raw/ — raw archived HTML/images (by md5 of path) and download logs; cdx_*.json — archive indexes.
- Scripts: plan.py, dl.py, dl_vpa.py, parse.py, build.py, site2.py, pages_export.py, check.py.
