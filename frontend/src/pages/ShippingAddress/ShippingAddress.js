import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import Header from '../../components/Header/Header';
import './Checkout.css';
import { useForm } from 'react-hook-form';

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const cart = useSelector((state) => state.cart);
  // const { shippingAddress } = cart;

  const navigate = useNavigate();
  // if not login - redirect to login page
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  // const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  // const [phoneNumber, setPhoneNumber] = useState(
  //   shippingAddress.phoneNumber || ''
  // );
  // const [address, setAddress] = useState(shippingAddress.address || '');
  // const [city, setCity] = useState(shippingAddress.city || '');
  // const [postalCode, setPostalCode] = useState(
  //   shippingAddress.postalCode || ''
  // );

  const dispatch = useDispatch();

  const submitHandler = (data, e) => {
    e.preventDefault();

    dispatch(
      saveShippingAddress({
        fullName: data.firstName + ' ' + data.lastName,
        phoneNumber: data.phoneNumber,
        address: data.address + ', ' + data.barangay,
        city: data.city,
        postalCode: data.postalCode,
      })
    );

    navigate('/payment');
  };
  // console.log(errors);

  return (
    <div>
      <Header />
      <CheckoutSteps step1 step2 />
      <form
        className="form checkout-form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div>
          <h3>Shipping Address</h3>
        </div>
        <div className="form-flex">
          <div className="form-control">
            <label htmlFor="firstName">First name</label>
            <input
              className={errors.firstName && 'invalid-border'}
              autoComplete="off"
              type="text"
              id="firstName"
              placeholder="Enter first name"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
              {...register('firstName', {
                required: 'First name is required',
                minLength: {
                  value: 2,
                  message: 'First name should contain at least 2 characters',
                },
                maxLength: {
                  value: 35,
                  message: 'The max length of 35 characters is reached',
                },
                pattern: {
                  value: /^[A-Za-z' ,.-]+$/,
                  message: 'Invalid name',
                },
              })}
            />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <input
              className={errors.lastName && 'invalid-border'}
              autoComplete="off"
              type="text"
              id="lastName"
              placeholder="Enter last name"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
              {...register('lastName', {
                required: 'Last name is required',
                minLength: {
                  value: 2,
                  message: 'Last name should contain at least 2 characters',
                },
                maxLength: {
                  value: 35,
                  message: 'The max length of 35 characters is reached',
                },
                pattern: {
                  value: /^[A-Za-z' ,.-]+$/,
                  message: 'Invalid name',
                },
              })}
            />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className={errors.phoneNumber && 'invalid-border'}
            type="text"
            id="phoneNumber"
            placeholder="Enter phone number"
            // value={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0][0-9]{10}$/,
                message: 'Invalid phone number',
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="text-danger">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="form-flex form-flex-address">
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <input
              className={errors.address && 'invalid-border'}
              type="text"
              id="address"
              placeholder="Street Name, Building, House No."
              // value={address}
              // onChange={(e) => setAddress(e.target.value)}
              {...register('address', {
                required: 'Address is required',
                minLength: {
                  value: 5,
                  message: 'Minimum required length is 8 characters',
                },
                maxLength: {
                  value: 150,
                  message: 'The max length of 150 characters is reached',
                },
                pattern: {
                  value: /^[#.0-9a-zA-Z\s,-]+$/,
                  message: 'Invalid address',
                },
              })}
            />
            {errors.address && (
              <p className="text-danger">{errors.address.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="barangay">Barangay</label>
            <input
              className={errors.barangay && 'invalid-border'}
              type="text"
              id="barangay"
              placeholder="Barangay"
              // value={address}
              // onChange={(e) => setAddress(e.target.value)}
              {...register('barangay', {
                required: 'Address is required',
                minLength: {
                  value: 4,
                  message: 'Minimum required length is 4 characters',
                },
                pattern: {
                  value: /^[#.0-9a-zA-Z\s,-]+$/,
                  message: 'Invalid address',
                },
              })}
            />
            {errors.barangay && (
              <p className="text-danger">{errors.barangay.message}</p>
            )}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <select
            className={errors.city && 'invalid-border'}
            id="city"
            // value={city}
            // onChange={(e) => setCity(e.target.value)}
            {...register('city', { required: 'City is required' })}
          >
            <option value="" disabled selected style={{ color: 'grey' }}>
              Select your city
            </option>
            <option value="Quezon City">Quezon City</option>
            <option value="Caloocan">Caloocan</option>
            <option value="Makati">Makati</option>
            <option value="Malabon">Malabon</option>
            <option value="Mandaluyong">Mandaluyong</option>
            <option value="Manila">Manila</option>
            <option value="Marikina">Marikina</option>
            <option value="Navotas">Navotas</option>
            <option value="Paranaque">Paranaque</option>
            <option value="Pasay">Pasay</option>
            <option value="Pasig">Pasig</option>
            <option value="Taguig">Taguig</option>
            <option value="Valenzuela">Valenzuela</option>
          </select>

          {errors.city && <p className="text-danger">{errors.city.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className={errors.postalCode && 'invalid-border'}
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            // value={postalCode}
            // onChange={(e) => setPostalCode(e.target.value)}
            {...register('postalCode', {
              required: 'Postal code is required',
              pattern: {
                value: /^[0-9]{4}$/,
                message: 'Invalid postal code',
              },
            })}
          />
          {errors.postalCode && (
            <p className="text-danger">{errors.postalCode.message}</p>
          )}
        </div>

        <div className="form-control">
          <label></label>
          <button type="submit" className="form-submit-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
