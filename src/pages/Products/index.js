import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductsByParams } from '~/utils';
import { formatCash } from '~/components/Format';
function Products() {
    //Data render
    const sortBySelectData = [
        {
            value: 'default',
            text: 'Mặc định',
        },
        {
            value: 'nameasc',
            text: 'Tên (A - Z)',
        },
        {
            value: 'namedesc',
            text: 'Tên (Z - A)',
        },
        {
            value: 'priceasc',
            text: 'Giá (Thấp > Cao)',
        },
        {
            value: 'pricedesc',
            text: 'Giá (Cao > Thấp)',
        },
        {
            value: 'new',
            text: 'Mới nhất',
        },
    ];
    const brandData = [
        {
            id: 'brand-1',
            text: 'Thương hiệu 1',
        },
        {
            id: 'brand-2',
            text: 'Thương hiệu 2',
        },
        {
            id: 'brand-3',
            text: 'Thương hiệu 3',
        },
    ];

    const [brandChecked, setBrandChecked] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [sortType, setSortType] = useState('default');
    const [filter, setFilter] = useState('');
    const params = {};
    var search = document.location.href.split('search=')[1];
    if (search) params.q = search.toLowerCase();
    switch (sortType) {
        case 'nameasc':
            params._sort = 'name';
            params._order = 'asc';
            break;
        case 'namedesc':
            params._sort = 'name';
            params._order = 'desc';
            break;
        case 'priceasc':
            params._sort = 'price';
            params._order = 'asc';
            break;
        case 'pricedesc':
            params._sort = 'price';
            params._order = 'desc';
            break;
        case 'new':
            params._sort = 'id';
            params._order = 'desc';
            break;
        default:
        // code block
    }
    params.type_like = filter;
    useEffect(() => {
        getProductsByParams(params)
            .then(function (response) {
                setListProduct(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        // eslint-disable-next-line
    }, [filter, sortType]);

    //Xử lý brand checked
    const handleCheckBrand = (id) => {
        setBrandChecked((prev) => {
            const isChecked = brandChecked.includes(id);
            if (isChecked) return brandChecked.filter((item) => item !== id);
            else {
                return [...prev, id];
            }
        });
    };

    return (
        <section id="product" className="product">
            <div className="product-container">
                <div className="product-top">
                    {search && (
                        <div className="product-top-title">
                            <h3 className="heading-page">
                                Kết quả tìm kiếm với từ khoá: {decodeURIComponent(search)}{' '}
                            </h3>
                        </div>
                    )}
                </div>
                <div className="product-top">
                    <div className="product-top-title">
                        <h3 className="heading-page">
                            <a href="/">Trang chủ</a> / <span>Sản phẩm</span>
                        </h3>
                    </div>
                    <div className="product-top-sort-by">
                        <div className="product-top-sort-by-title">
                            <h3>Sắp xếp:</h3>
                        </div>
                        <div className="product-top-sort-by-select">
                            <select
                                name="sort-by"
                                onChange={(e) => {
                                    setSortType(e.target.value);
                                }}
                            >
                                {sortBySelectData.map((sort, index) => {
                                    return (
                                        <option key={index} value={sort.value}>
                                            {sort.text}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="product-body">
                    <div className="product-body-filter">
                        <div className="product-body-filter-title">
                            <h3>Bộ lọc:</h3>
                        </div>
                        <div className="product-body-filter-select">
                            <select
                                name="filter"
                                onChange={(e) => {
                                    setFilter(e.target.value);
                                }}
                            >
                                <option value="">Tất cả</option>
                                <option value="shirt">Áo phông</option>
                                <option value="pant">Quần</option>
                                <option value="shoe">Giày</option>
                            </select>
                        </div>
                        <div className="product-body-filter-brand">
                            <h3>Thương hiệu</h3>
                            <div className="product-body-filter-brand-list">
                                <ul>
                                    {brandData.map((brand) => (
                                        <li key={brand.id}>
                                            <input
                                                type="checkbox"
                                                id={brand.id}
                                                checked={brandChecked.includes(brand.id)}
                                                onChange={() => handleCheckBrand(brand.id)}
                                            />
                                            <label htmlFor={brand.id}>{brand.text}</label>
                                        </li>
                                    ))}
                                    {/* <li>
                                        <input type="checkbox" id="brand-1" name="brand-1" />
                                        <label htmlFor="brand-1">Thương hiệu 1</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="brand-2" name="brand-2" />
                                        <label htmlFor="brand-2">Thương hiệu 2</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="brand-3" name="brand-3" />
                                        <label htmlFor="brand-3">Thương hiệu 3</label>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="product-body-filter-price">
                            <h3>Giá</h3>
                            <div className="product-body-filter-price-list">
                                <ul>
                                    <li>
                                        <input
                                            type="radio"
                                            value="1"
                                            id="price-1"
                                            name="price"
                                            onChange={(e) => console.log(e.target.value)}
                                        />
                                        <label htmlFor="price-1">0đ - 100.000đ</label>
                                    </li>
                                    <li>
                                        <input type="radio" value="2" id="price-2" name="price" />
                                        <label htmlFor="price-2">100.000đ - 200.000đ</label>
                                    </li>
                                    <li>
                                        <input type="radio" value="3" id="price-3" name="price" />
                                        <label htmlFor="price-3">200.000đ - 300.000đ</label>
                                    </li>
                                    <li>
                                        <input type="radio" value="4" id="price-4" name="price" />
                                        <label htmlFor="price-4">300.000đ - 500.000đ</label>
                                    </li>
                                    <li>
                                        <input type="radio" value="5" id="price-5" name="price" />
                                        <label htmlFor="price-5">500.000đ - 800.000đ</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-body-filter-size">
                            <h3>Kích thước</h3>
                            <div className="product-body-filter-size-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="size-1" name="size-1" />
                                        <label htmlFor="size-1">XS</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-2" name="size-2" />
                                        <label htmlFor="size-2">S</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-3" name="size-3" />
                                        <label htmlFor="size-3">M</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-4" name="size-4" />
                                        <label htmlFor="size-4">L</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-5" name="size-5" />
                                        <label htmlFor="size-5">XL</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-body-filter-button">
                            <button type="submit" className="btn btn-cart">
                                Lọc
                            </button>
                        </div>
                    </div>
                    <div id="product-body-list">
                        {listProduct.map((product) => {
                            let totalsale = product.price - (product.price * product.discount) / 100;
                            totalsale = (totalsale / 1000).toFixed() * 1000;
                            return (
                                <Link
                                    key={product.id}
                                    to={'/product-detail/' + product.id}
                                    id={product.id}
                                    className="product-body-list-item"
                                >
                                    <div className="product-body-list-item-image">
                                        <img src={product.image} height="80" alt="" />
                                    </div>
                                    <div className="product-body-list-item-title">
                                        <h4>{product.name}</h4>
                                    </div>
                                    <div className="product-body-list-item-discount">
                                        <p>Giảm {product.discount}%</p>
                                    </div>
                                    <div className="product-body-list-item-price">
                                        <h4>
                                            <span>{formatCash(product.price + '')}đ</span> {formatCash(totalsale + '')}đ
                                        </h4>
                                    </div>
                                    <div className="product-body-list-item-button">
                                        <button className="btn btn-cart">Đặt mua</button>
                                        <button className="btn btn-cart">Xem chi tiết</button>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;
