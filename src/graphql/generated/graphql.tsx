export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type AdminNotification = {
  __typename?: 'AdminNotification';
  bodyText: Scalars['String']['output'];
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userNames?: Maybe<Scalars['JSON']['output']>;
};

export type CancelOrderDto = {
  cancelReason: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
};

export type ChangePasswordDto = {
  confirmedPassword: Scalars['String']['input'];
  newPassWord: Scalars['String']['input'];
  oldPassWord: Scalars['String']['input'];
};

export type ConfirmForgotPasswordDto = {
  confirmationCode: Scalars['String']['input'];
  confirmedPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type CoordinateDto = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  timeStamp?: InputMaybe<Scalars['Float']['input']>;
};

export type CoordinateInfor = {
  __typename?: 'CoordinateInfor';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type Coordinates = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Country = {
  __typename?: 'Country';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isoCode?: Maybe<Scalars['String']['output']>;
  languages: Array<Language>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type CreateDealConversationDto = {
  dealStatus?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
};

export type CreateLocationDto = {
  email: Scalars['String']['input'];
  location: Array<CoordinateDto>;
  name: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
};

export type CreateOrderReviewDto = {
  driverId: Scalars['String']['input'];
  feedback?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
};

export enum Deal_Order_Status {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  Processing = 'Processing'
}

export enum Deal_Order_User_Status {
  Agree = 'AGREE',
  Deny = 'DENY'
}

export type DealConversation = {
  __typename?: 'DealConversation';
  createdAt?: Maybe<Scalars['Date']['output']>;
  dealStatus?: Maybe<Scalars['String']['output']>;
  deletedAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  lastMessage?: Maybe<LastMessage>;
  members?: Maybe<Array<Scalars['String']['output']>>;
  messages?: Maybe<Array<Message>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userDealConversations?: Maybe<Array<UserDealConversation>>;
  users?: Maybe<Array<User>>;
};

export type DeleteFileDto = {
  url: Scalars['String']['input'];
};

export type DeliveryInformationInput = {
  currency: Scalars['String']['input'];
  expectedCost: Scalars['Float']['input'];
  note: Scalars['String']['input'];
  transportationIds: Array<Scalars['String']['input']>;
};

export type DriverVerificationRequestWithCriminalCheckFile = {
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  criminalCheckFiles?: InputMaybe<Scalars['JSON']['input']>;
  dateRegister?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiredDate?: InputMaybe<Scalars['Date']['input']>;
  governmentPhotoUrls?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Verification_Request_Status>;
};

export type FavoriteLocation = {
  __typename?: 'FavoriteLocation';
  address?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<CoordinateInfor>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  receiver?: Maybe<User>;
  receiverEmail?: Maybe<Scalars['String']['output']>;
  receiverId?: Maybe<Scalars['String']['output']>;
  receiverName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type FavoriteOrder = {
  __typename?: 'FavoriteOrder';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type FilterDto = {
  data: Scalars['String']['input'];
  field: Scalars['String']['input'];
  operator: Query_Operator;
};

export type ForgotPasswordDto = {
  email: Scalars['String']['input'];
};

/** User gender */
export enum Gender {
  Female = 'Female',
  Male = 'Male'
}

export type ICountRating = {
  __typename?: 'ICountRating';
  ratingfive?: Maybe<Scalars['String']['output']>;
  ratingfour?: Maybe<Scalars['String']['output']>;
  ratingone?: Maybe<Scalars['String']['output']>;
  ratingthree?: Maybe<Scalars['String']['output']>;
  ratingtwo?: Maybe<Scalars['String']['output']>;
};

export type ICountries = {
  __typename?: 'ICountries';
  items: Array<ICountry>;
  meta: MetaPaginationInterface;
};

export type ICountry = {
  __typename?: 'ICountry';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isoCode?: Maybe<Scalars['String']['output']>;
  languages: Array<Language>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type IDealConversations = {
  __typename?: 'IDealConversations';
  items: Array<DealConversation>;
  meta: MetaPaginationInterface;
};

export type IDealOrder = {
  __typename?: 'IDealOrder';
  counterOfferCost?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  deletedAt: Scalars['Date']['output'];
  driver?: Maybe<User>;
  driverId?: Maybe<Scalars['String']['output']>;
  finalCost?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  promotion?: Maybe<Promotion>;
  promotionDiscountForDriver?: Maybe<Scalars['Float']['output']>;
  promotionId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  transportation?: Maybe<Array<Transportation>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type IDealOrders = {
  __typename?: 'IDealOrders';
  items: Array<IDealOrder>;
  meta: MetaPaginationInterface;
};

export type IFavoriteLocation = {
  __typename?: 'IFavoriteLocation';
  address?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<CoordinateInfor>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  receiver?: Maybe<User>;
  receiverEmail?: Maybe<Scalars['String']['output']>;
  receiverId?: Maybe<Scalars['String']['output']>;
  receiverName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type IFavoriteLocations = {
  __typename?: 'IFavoriteLocations';
  items: Array<IFavoriteLocation>;
  meta: MetaPaginationInterface;
};

export type IFavoriteOrder = {
  __typename?: 'IFavoriteOrder';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type IFavoriteOrders = {
  __typename?: 'IFavoriteOrders';
  items: Array<IFavoriteOrder>;
  meta: MetaPaginationInterface;
};

export type IMessages = {
  __typename?: 'IMessages';
  items: Array<Message>;
  meta: MetaPaginationInterface;
};

export type IOrderReview = {
  __typename?: 'IOrderReview';
  createdAt?: Maybe<Scalars['Date']['output']>;
  driverId: Scalars['String']['output'];
  feedback?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  sender?: Maybe<User>;
  senderId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type IOrderReviews = {
  __typename?: 'IOrderReviews';
  items: Array<IOrderReview>;
  meta: MetaPaginationInterface;
};

export type IOrders = {
  __typename?: 'IOrders';
  items: Array<Order>;
  meta: MetaPaginationInterface;
};

export type IPackages = {
  __typename?: 'IPackages';
  items: Array<Package>;
  meta: MetaPaginationInterface;
};

export type IPayment = {
  __typename?: 'IPayment';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  order?: Maybe<Order>;
  paymentType: Payment_Types;
  stripeChargeId?: Maybe<Scalars['String']['output']>;
  stripePaymentIntentId?: Maybe<Scalars['String']['output']>;
  stripePaymentMethodInfo?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type IPayments = {
  __typename?: 'IPayments';
  items: Array<Payment>;
  meta: MetaPaginationInterface;
};

export type IPreSignUrl = {
  __typename?: 'IPreSignUrl';
  fileType: Scalars['String']['output'];
  pathFile: Scalars['String']['output'];
  uploadUrl: Scalars['String']['output'];
};

export type IPromotion = {
  __typename?: 'IPromotion';
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  condition?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isReferral: Scalars['Boolean']['output'];
  startDate?: Maybe<Scalars['Date']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userType?: Maybe<Scalars['String']['output']>;
};

export type IPromotions = {
  __typename?: 'IPromotions';
  items: Array<IPromotion>;
  meta: MetaPaginationInterface;
};

export type IRecentlyTransportationDriver = {
  __typename?: 'IRecentlyTransportationDriver';
  driverId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  transportation: Array<Transportation>;
};

export type IStripe = {
  __typename?: 'IStripe';
  clientSecret?: Maybe<Scalars['String']['output']>;
  paymentIntentId?: Maybe<Scalars['String']['output']>;
  requiresAction?: Maybe<Scalars['Boolean']['output']>;
};

export type ITransportations = {
  __typename?: 'ITransportations';
  items: Array<Transportation>;
  meta: MetaPaginationInterface;
};

export type IUser = {
  __typename?: 'IUser';
  _id?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['JSONObject']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  avgRate?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  connectedAccountId?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<CoordinateInfor>;
  countRate?: Maybe<Scalars['Float']['output']>;
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  dealConversations?: Maybe<Array<DealConversation>>;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderReviews?: Maybe<OrderReview>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  preferredLanguage: Scalars['String']['output'];
  referralCode?: Maybe<Scalars['String']['output']>;
  referralCodeInvite?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Role>>;
  totalOrder?: Maybe<Scalars['Float']['output']>;
  transportation?: Maybe<Array<Transportation>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userType?: Maybe<User_Type>;
  userVerificationId?: Maybe<Scalars['String']['output']>;
  userVerificationRequest?: Maybe<UserVerificationRequest>;
};

export type IUserDealConversation = {
  __typename?: 'IUserDealConversation';
  createdAt?: Maybe<Scalars['Date']['output']>;
  dealConversation?: Maybe<DealConversation>;
  dealConversationId?: Maybe<Scalars['String']['output']>;
  deletedAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  lastMessage?: Maybe<LastMessage>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type IUserDealConversations = {
  __typename?: 'IUserDealConversations';
  items: Array<IUserDealConversation>;
  meta: MetaPaginationInterface;
};

export type IUserVerificationRequest = {
  __typename?: 'IUserVerificationRequest';
  cardNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  criminalCheckFiles?: Maybe<Scalars['JSON']['output']>;
  dateRegister?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Scalars['JSON']['output']>;
  expiredDate?: Maybe<Scalars['Date']['output']>;
  governmentPhotoUrls?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  reasonDeny?: Maybe<Scalars['String']['output']>;
  selfiePhotoUrls?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Verification_Request_Status>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  vehicles?: Maybe<Array<VehicleVerification>>;
};

export type IUsers = {
  __typename?: 'IUsers';
  items: Array<IUser>;
  meta: MetaPaginationInterface;
};

export type IVehicleVerification = {
  __typename?: 'IVehicleVerification';
  brand?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  driverExpirationDate?: Maybe<Scalars['Date']['output']>;
  driverLicenseNumber?: Maybe<Scalars['String']['output']>;
  driverPhotoUrl?: Maybe<Scalars['JSON']['output']>;
  driverVerification?: Maybe<UserVerificationRequest>;
  driverVerificationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  insuranceExpirationDate?: Maybe<Scalars['Date']['output']>;
  insuranceNumber?: Maybe<Scalars['String']['output']>;
  insurancePhotoUrl?: Maybe<Scalars['JSON']['output']>;
  licensePlate?: Maybe<Scalars['String']['output']>;
  licensenPlatePhotoUrl?: Maybe<Scalars['JSON']['output']>;
  ownerName?: Maybe<Scalars['String']['output']>;
  regisVehicleExpirationDate?: Maybe<Scalars['Date']['output']>;
  regisVehicleLicenseNumber?: Maybe<Scalars['String']['output']>;
  regisVehiclePhotoUrl?: Maybe<Scalars['JSON']['output']>;
  transportation?: Maybe<Transportation>;
  transportationId?: Maybe<Scalars['String']['output']>;
  typeVehicle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  yearOfManufacture?: Maybe<Scalars['Date']['output']>;
};

export type IVehicleVerifications = {
  __typename?: 'IVehicleVerifications';
  items: Array<IVehicleVerification>;
  meta: MetaPaginationInterface;
};

export type Language = {
  __typename?: 'Language';
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type LanguageDto = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type LastMessage = {
  __typename?: 'LastMessage';
  files?: Maybe<Array<Scalars['String']['output']>>;
  isSeen?: Maybe<Scalars['Boolean']['output']>;
  seenBy?: Maybe<Array<Scalars['String']['output']>>;
  senderId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  driverId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  latitude: Scalars['String']['output'];
  longtitude: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
};

export type Locations = {
  __typename?: 'Locations';
  items: Array<Location>;
};

export enum Message_Type {
  Audio = 'Audio',
  File = 'File',
  Image = 'Image',
  Text = 'Text',
  Video = 'Video'
}

export type Message = {
  __typename?: 'Message';
  _id?: Maybe<Scalars['String']['output']>;
  attachment?: Maybe<Scalars['String']['output']>;
  audio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  dealConversation?: Maybe<DealConversation>;
  dealConversationId?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  image?: Maybe<Array<Scalars['String']['output']>>;
  isSeen?: Maybe<Scalars['Boolean']['output']>;
  seenBy?: Maybe<Array<Scalars['String']['output']>>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Message_Type>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userDealConversation?: Maybe<UserDealConversation>;
  userDealConversationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Array<Scalars['String']['output']>>;
};

export type MetaPaginationInterface = {
  __typename?: 'MetaPaginationInterface';
  currentPage: Scalars['Float']['output'];
  itemCount: Scalars['Float']['output'];
  itemsPerPage: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  applyReferralCodeInvite: Promotion;
  attachConnectedAccount: Scalars['JSON']['output'];
  attachStripePaymentMethod: Scalars['JSON']['output'];
  cancelOrder: Order;
  changePassword: IUser;
  confirmForgotPassword: IUser;
  createDealConversation: DealConversation;
  createDriverVerificationRequest: IUserVerificationRequest;
  createOrderReview: OrderReview;
  createRecentlyTransportationDriver: IRecentlyTransportationDriver;
  createStripeConnectedAccount: Scalars['JSON']['output'];
  createStripePayment: IStripe;
  createStripePaymentCustomer: Scalars['String']['output'];
  deleteAccount: Scalars['String']['output'];
  deleteConnectedAccount: Scalars['String']['output'];
  deleteFavoriteLocation: ResponseMessageBase;
  deleteFileS3: Scalars['String']['output'];
  deleteVehicleVerification: Scalars['String']['output'];
  detachStripePaymentMethod: Scalars['JSON']['output'];
  disableDriver: IUser;
  disableUser: IUser;
  enableDriver: IUser;
  enableUser: IUser;
  forgotPassword: IUser;
  presignedUrlS3: IPreSignUrl;
  readMessage: DealConversation;
  sendMessage: Message;
  updateDriverLocation: Scalars['Boolean']['output'];
  updateLocation: Location;
  updateMe: IUser;
  updateOrderPayment: Order;
  updateStatusDealOrder: IDealOrder;
  updateStatusOrder: Order;
  updateStatusPackage: Order;
  updateUserType: IUser;
  upsertCountry: ICountry;
  upsertDealOrder: IDealOrder;
  upsertDriverVerificationRequest: IUserVerificationRequest;
  upsertFavoriteLocation: FavoriteLocation;
  upsertFavoriteOrder: FavoriteOrder;
  upsertOrder: Order;
  upsertUserDealConversation: IUserDealConversation;
  upsertUserVerificationRequest: IUserVerificationRequest;
  upsertVehicleVerification: IVehicleVerification;
};


export type MutationApplyReferralCodeInviteArgs = {
  referralCode: Scalars['String']['input'];
};


export type MutationAttachConnectedAccountArgs = {
  connectedAccountId: Scalars['String']['input'];
};


export type MutationAttachStripePaymentMethodArgs = {
  customerId: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
};


export type MutationCancelOrderArgs = {
  input: CancelOrderDto;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordDto;
};


export type MutationConfirmForgotPasswordArgs = {
  input: ConfirmForgotPasswordDto;
};


export type MutationCreateDealConversationArgs = {
  input: CreateDealConversationDto;
};


export type MutationCreateOrderReviewArgs = {
  input: CreateOrderReviewDto;
};


export type MutationCreateRecentlyTransportationDriverArgs = {
  payload: CreateRecentlyTransportationDriverDto;
};


export type MutationCreateStripePaymentArgs = {
  paymentDto: StripeDto;
};


export type MutationDeleteConnectedAccountArgs = {
  connectedAccountId: Scalars['String']['input'];
};


export type MutationDeleteFavoriteLocationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteFileS3Args = {
  deleteFileDto: DeleteFileDto;
};


export type MutationDeleteVehicleVerificationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDetachStripePaymentMethodArgs = {
  paymentMethodId: Scalars['String']['input'];
};


export type MutationDisableDriverArgs = {
  id: Scalars['String']['input'];
};


export type MutationDisableUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnableDriverArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnableUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordDto;
};


export type MutationPresignedUrlS3Args = {
  presignedUrlDto: PresignedUrlDto;
};


export type MutationReadMessageArgs = {
  dealConversationId: Scalars['String']['input'];
};


export type MutationSendMessageArgs = {
  input: SendMessageDto;
};


export type MutationUpdateDriverLocationArgs = {
  input: UpdateDriverLocationDto;
};


export type MutationUpdateLocationArgs = {
  body: CreateLocationDto;
};


export type MutationUpdateMeArgs = {
  input: UpdateMeDto;
};


export type MutationUpdateOrderPaymentArgs = {
  updateOrderPaymentDto: UpdateOrderPaymentDto;
};


export type MutationUpdateStatusDealOrderArgs = {
  upsertDealOrderDto: UpdateStatusDealOrderDto;
};


export type MutationUpdateStatusOrderArgs = {
  input: UpdateStatusOrderDto;
};


export type MutationUpdateStatusPackageArgs = {
  payload: UpdateStatusPackageDto;
};


export type MutationUpdateUserTypeArgs = {
  input: UpdateUserTypeDto;
};


export type MutationUpsertCountryArgs = {
  upsertCountryDto: UpsertCountryDto;
};


export type MutationUpsertDealOrderArgs = {
  upsertDealOrderDto: UpsertDealOrderDto;
};


export type MutationUpsertDriverVerificationRequestArgs = {
  input: UploadDriverVerificationRequestDto;
};


export type MutationUpsertFavoriteLocationArgs = {
  upsertFavoriteLocationDto: UpsertFavoriteLocationDto;
};


export type MutationUpsertFavoriteOrderArgs = {
  upsertFavoriteOrderDto: UpsertFavoriteOrderDto;
};


export type MutationUpsertOrderArgs = {
  upsertOrderDto: UpsertOrderDto;
};


export type MutationUpsertUserDealConversationArgs = {
  upsertUserDealConversationDto: UpsertUserDealConversationDto;
};


export type MutationUpsertUserVerificationRequestArgs = {
  input: UploadVerificationRequestDto;
};


export type MutationUpsertVehicleVerificationArgs = {
  input: UpsertVehicleVerificationDto;
};

export enum Order_Status {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  LookingForDriver = 'LookingForDriver',
  Pending = 'Pending',
  PickedUp = 'PickedUp'
}

export type Order = {
  __typename?: 'Order';
  cancelReason?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['Float']['output']>;
  commissionInfo?: Maybe<Scalars['JSON']['output']>;
  completedAt?: Maybe<Scalars['Date']['output']>;
  coordinates?: Maybe<CoordinateInfor>;
  counterOfferCost?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  currency: Scalars['String']['output'];
  dealConversation?: Maybe<DealConversation>;
  dealConversationId?: Maybe<Scalars['String']['output']>;
  deliveryScheduledAt?: Maybe<Scalars['Date']['output']>;
  driver?: Maybe<User>;
  driverId?: Maybe<Scalars['String']['output']>;
  driverPromotion?: Maybe<Promotion>;
  driverPromotionId?: Maybe<Scalars['String']['output']>;
  driverReceivedAmount?: Maybe<Scalars['Float']['output']>;
  expectedCost?: Maybe<Scalars['Float']['output']>;
  finalCost?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  isRating: Scalars['Boolean']['output'];
  note?: Maybe<Scalars['String']['output']>;
  packageInfo: Array<PackageInfo>;
  packageQuantity?: Maybe<Scalars['Float']['output']>;
  packages?: Maybe<Array<Package>>;
  payment?: Maybe<Payment>;
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentIntentId?: Maybe<Scalars['String']['output']>;
  pickedUpAt?: Maybe<Scalars['Date']['output']>;
  promotion?: Maybe<Promotion>;
  promotionDiscount?: Maybe<Scalars['Float']['output']>;
  promotionId?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<User>;
  senderId: Scalars['String']['output'];
  senderInfo: UserInfo;
  status: Order_Status;
  tip?: Maybe<Scalars['Float']['output']>;
  transportation?: Maybe<Array<Transportation>>;
  transportationTransfer?: Maybe<Transportation>;
  transportationTransferId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userDiscountAmount?: Maybe<Scalars['Float']['output']>;
  userPaidAmount?: Maybe<Scalars['Float']['output']>;
};

export type OrderReview = {
  __typename?: 'OrderReview';
  createdAt?: Maybe<Scalars['Date']['output']>;
  driverId: Scalars['String']['output'];
  feedback?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  sender?: Maybe<User>;
  senderId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum Package_Status {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  LookingForDriver = 'LookingForDriver',
  PickedUp = 'PickedUp'
}

export enum Payment_Types {
  Cash = 'Cash',
  Stripe = 'Stripe'
}

export type Package = {
  __typename?: 'Package';
  acceptedAt?: Maybe<Scalars['Date']['output']>;
  cancelledAt?: Maybe<Scalars['Date']['output']>;
  completedAt?: Maybe<Scalars['Date']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  deliveryScheduledAt?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  packageCode?: Maybe<Scalars['String']['output']>;
  pickedUpAt?: Maybe<Scalars['Date']['output']>;
  receiverAddress?: Maybe<Scalars['String']['output']>;
  receiverAddress2?: Maybe<Scalars['String']['output']>;
  receiverAvatar?: Maybe<Scalars['String']['output']>;
  receiverCoordinates?: Maybe<Coordinate>;
  receiverEmail?: Maybe<Scalars['String']['output']>;
  receiverName?: Maybe<Scalars['String']['output']>;
  receiverNote?: Maybe<Scalars['String']['output']>;
  receiverPhoneNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Package_Status>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type PackageInfo = {
  __typename?: 'PackageInfo';
  acceptedAt?: Maybe<Scalars['Date']['output']>;
  cancelledAt?: Maybe<Scalars['Date']['output']>;
  completedAt?: Maybe<Scalars['Date']['output']>;
  deliveryScheduledAt?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  pickedUpAt?: Maybe<Scalars['Date']['output']>;
  receiver: UserInfo;
  status?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type PackageInformationInput = {
  completedAt?: InputMaybe<Scalars['Date']['input']>;
  deliveryScheduledAt?: InputMaybe<Scalars['Date']['input']>;
  description: Scalars['String']['input'];
  height: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  pickedUpAt?: InputMaybe<Scalars['Date']['input']>;
  receiver: UserInput;
  status?: InputMaybe<Package_Status>;
  weight: Scalars['Float']['input'];
};

export type Payment = {
  __typename?: 'Payment';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  order?: Maybe<Order>;
  paymentType: Payment_Types;
  stripeChargeId?: Maybe<Scalars['String']['output']>;
  stripePaymentIntentId?: Maybe<Scalars['String']['output']>;
  stripePaymentMethodInfo?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PresignedUrlDto = {
  fileName: Scalars['String']['input'];
  fileType: Scalars['String']['input'];
  pathType: S3_Upload_Type;
};

export type Promotion = {
  __typename?: 'Promotion';
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  condition?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isReferral: Scalars['Boolean']['output'];
  startDate?: Maybe<Scalars['Date']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userType?: Maybe<Scalars['String']['output']>;
};

export enum Query_Operator {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Like = 'like',
  Lt = 'lt',
  Lte = 'lte',
  Neq = 'neq',
  Nin = 'nin'
}

export type Query = {
  __typename?: 'Query';
  getCountRating: ICountRating;
  getCountries: ICountries;
  getCountry: ICountry;
  getDealConversation: DealConversation;
  getDealConversationOrder: UserDealConversation;
  getDealConversations: IDealConversations;
  getDealOrder: IDealOrder;
  getDealOrders: IDealOrders;
  getDriverDealConversations: IDealConversations;
  getFavoriteLocation: IFavoriteLocation;
  getFavoriteLocationByUser: IFavoriteLocations;
  getFavoriteLocations: IFavoriteLocations;
  getFavoriteOrder: IFavoriteOrder;
  getFavoriteOrderByUser: IFavoriteOrders;
  getFavoriteOrders: IFavoriteOrders;
  getListStripePaymentMethods: Scalars['JSON']['output'];
  getMe: IUser;
  getMessages: IMessages;
  getNearbyDrivers: Locations;
  getOneDealOrder: IDealOrder;
  getOneDealOrders: IDealOrders;
  getOrder: Order;
  getOrderNearBy: IOrders;
  getOrderOfUser: Order;
  getOrderReviewByUser: IOrderReviews;
  getOrders: IOrders;
  getOrdersOfDriver: IOrders;
  getPackages: IPackages;
  getPromotion: IPromotion;
  getReceiverOrders: IOrders;
  getRecentlyTransportationDriver: IRecentlyTransportationDriver;
  getReferralPromotion: IPromotions;
  getStripeConnectedAccount: Scalars['JSON']['output'];
  getStripeCustomer: Scalars['JSON']['output'];
  getTransaction: IPayment;
  getTransactions: IPayments;
  getTransportation: Transportation;
  getTransportations: ITransportations;
  getUser: IUser;
  getUserByEmail: IUser;
  getUserDealConversation: IUserDealConversation;
  getUserDealConversations: IUserDealConversations;
  getUserReviews: IOrderReviews;
  getUserVerificationRequest: IUserVerificationRequest;
  getUsers: IUsers;
  getVehicleVerification: IVehicleVerification;
  getVehicleVerifications: IVehicleVerifications;
};


export type QueryGetCountRatingArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetCountriesArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetCountryArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDealConversationArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDealConversationOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryGetDealConversationsArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetDealOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDealOrdersArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetDriverDealConversationsArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetFavoriteLocationArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetFavoriteLocationByUserArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetFavoriteLocationsArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetFavoriteOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetFavoriteOrderByUserArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetFavoriteOrdersArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetMessagesArgs = {
  conversationId: Scalars['String']['input'];
  queryParams: QueryFilterDto;
};


export type QueryGetNearbyDriversArgs = {
  queryParams: SearchNearbyDriversParams;
};


export type QueryGetOneDealOrderArgs = {
  conversationId: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
};


export type QueryGetOneDealOrdersArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetOrderNearByArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetOrderOfUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetOrderReviewByUserArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetOrdersArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetOrdersOfDriverArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetPackagesArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetPromotionArgs = {
  code: Scalars['String']['input'];
};


export type QueryGetReceiverOrdersArgs = {
  email: Scalars['String']['input'];
  queryParams: QueryFilterDto;
};


export type QueryGetReferralPromotionArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetStripeCustomerArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetTransactionArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTransactionsArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetTransportationArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTransportationsArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetUserDealConversationArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserDealConversationsArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetUserReviewsArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetUsersArgs = {
  queryParams: QueryFilterDto;
};


export type QueryGetVehicleVerificationArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetVehicleVerificationsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryFilterDto = {
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "createdAt:DESC"
   *
   */
  coordinates?: InputMaybe<Coordinates>;
  /**
   *
   * - Filter equal: filters:[{field: "name", operator: eq, data: "Jayce"}]
   * - Filter not equal: filters:[{field: "name", operator: neq, data: "Jayce"}]
   * - Filter less than: filters:[{field: "age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "name", operator: in, data: "Alex,Julia"}]
   * - Filter field not in many choice: filters:[{field: "name", operator: nin, data: "Alex,Julia"}]
   * - Filter field by text: filters:[{field: "name", operator: like, data: "Jayce"}]
   */
  filters?: InputMaybe<Array<FilterDto>>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "createdAt:DESC"
   *
   */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']['input']>;
};

export type ResponseMessageBase = {
  __typename?: 'ResponseMessageBase';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Role = {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  users?: Maybe<Array<User>>;
};

export enum S3_Upload_Type {
  Booking = 'Booking',
  Chatting = 'Chatting',
  Package = 'Package',
  Profile = 'Profile',
  Public = 'Public'
}

export type SearchNearbyDriversParams = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  radiusInMeter: Scalars['Float']['input'];
};

export type SendMessageDto = {
  dealConversationId: Scalars['String']['input'];
  files?: InputMaybe<Array<Scalars['String']['input']>>;
  isSeen?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  type: Message_Type;
};

export type StripeDto = {
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  orderCode: Scalars['String']['input'];
  paymentCustomerId: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
  useStripeSdk: Scalars['Boolean']['input'];
};

export type Transportation = {
  __typename?: 'Transportation';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayDriverLicense: Scalars['Boolean']['output'];
  displayInsurance: Scalars['Boolean']['output'];
  displayVehicleRegistration: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  requireDriverLicense: Scalars['Boolean']['output'];
  requireInsurance: Scalars['Boolean']['output'];
  requireVehicleRegistration: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum User_Type {
  Admin = 'Admin',
  Driver = 'Driver',
  Undefined = 'Undefined',
  User = 'User'
}

export type UpdateDriverLocationDto = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type UpdateMeDto = {
  /**
   *
   *   Field it as JSON
   *   Eg: { "city": "Da Nang", "district": "Son Tra", "address": "18 An Nhon 3" }
   *
   */
  address?: InputMaybe<Scalars['JSON']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  preferredLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderPaymentDto = {
  currency: Scalars['String']['input'];
  finalCost: Scalars['Float']['input'];
  id: Scalars['String']['input'];
  paymentIntentId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentType: Payment_Types;
  promotionId?: InputMaybe<Scalars['String']['input']>;
  tip?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateStatusDealOrderDto = {
  driverId?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Deal_Order_User_Status>;
};

export type UpdateStatusOrderDto = {
  orderId: Scalars['String']['input'];
  status: Order_Status;
};

export type UpdateStatusPackageDto = {
  orderId: Scalars['String']['input'];
  packageId: Scalars['String']['input'];
  status: Package_Status;
};

export type UpdateUserTypeDto = {
  email: Scalars['String']['input'];
  userType: User_Type;
};

export type UploadDriverVerificationRequestDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Array<Scalars['String']['input']>>;
  driverVerificationRequest?: InputMaybe<DriverVerificationRequestWithCriminalCheckFile>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Verification_Request_Status>;
  transportationIds?: InputMaybe<Array<Scalars['String']['input']>>;
  vehicleVerifications?: InputMaybe<Array<VehicleVerificationDto>>;
};

export type UploadVerificationRequestDto = {
  governmentPhotoUrls: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  selfiePhotoUrls: Scalars['JSON']['input'];
  status?: InputMaybe<Verification_Request_Status>;
};

export type UpsertCountryDto = {
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isoCode: Scalars['String']['input'];
  languages: Array<LanguageDto>;
  name: Scalars['String']['input'];
};

export type UpsertDealOrderDto = {
  counterOfferCost?: InputMaybe<Scalars['Float']['input']>;
  finalCost?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  promotionId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Deal_Order_Status>;
  totalAmount: Scalars['Float']['input'];
  transportationIds: Array<Scalars['String']['input']>;
};

export type UpsertFavoriteLocationDto = {
  address: Scalars['String']['input'];
  coordinates?: InputMaybe<Coordinates>;
  id?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  receiverEmail: Scalars['String']['input'];
  receiverName: Scalars['String']['input'];
};

export type UpsertFavoriteOrderDto = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
};

export type UpsertOrderDto = {
  coordinates?: InputMaybe<Coordinates>;
  counterOfferCost?: InputMaybe<Scalars['Float']['input']>;
  deliveryInformation: DeliveryInformationInput;
  deliveryScheduledAt?: InputMaybe<Scalars['Date']['input']>;
  finalCost?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  packageInformations: Array<PackageInformationInput>;
  packageQuantity?: InputMaybe<Scalars['Float']['input']>;
  sender: UserInput;
  senderId: Scalars['String']['input'];
  status?: InputMaybe<Order_Status>;
};

export type UpsertUserDealConversationDto = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertVehicleVerificationDto = {
  brand?: InputMaybe<Scalars['String']['input']>;
  driverExpirationDate?: InputMaybe<Scalars['Date']['input']>;
  driverLicenseNumber?: InputMaybe<Scalars['String']['input']>;
  driverPhotoUrl?: InputMaybe<Array<Scalars['String']['input']>>;
  driverVerificationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  insuranceExpirationDate?: InputMaybe<Scalars['Date']['input']>;
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  insurancePhotoUrl?: InputMaybe<Array<Scalars['String']['input']>>;
  licensePlate?: InputMaybe<Scalars['String']['input']>;
  licensenPlatePhotoUrl?: InputMaybe<Array<Scalars['String']['input']>>;
  regisVehicleExpirationDate?: InputMaybe<Scalars['Date']['input']>;
  regisVehicleLicenseNumber?: InputMaybe<Scalars['String']['input']>;
  regisVehiclePhotoUrl?: InputMaybe<Array<Scalars['String']['input']>>;
  typeVehicle?: InputMaybe<Scalars['String']['input']>;
  yearOfManufacture?: InputMaybe<Scalars['Date']['input']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['JSONObject']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  avgRate?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  connectedAccountId?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<CoordinateInfor>;
  countRate?: Maybe<Scalars['Float']['output']>;
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  dealConversations?: Maybe<Array<DealConversation>>;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderReviews?: Maybe<OrderReview>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  preferredLanguage: Scalars['String']['output'];
  referralCode?: Maybe<Scalars['String']['output']>;
  referralCodeInvite?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Role>>;
  totalOrder?: Maybe<Scalars['Float']['output']>;
  transportation?: Maybe<Array<Transportation>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userType?: Maybe<User_Type>;
  userVerificationId?: Maybe<Scalars['String']['output']>;
  userVerificationRequest?: Maybe<UserVerificationRequest>;
};

export type UserDealConversation = {
  __typename?: 'UserDealConversation';
  createdAt?: Maybe<Scalars['Date']['output']>;
  dealConversation?: Maybe<DealConversation>;
  dealConversationId?: Maybe<Scalars['String']['output']>;
  deletedAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  lastMessage?: Maybe<LastMessage>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  address?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<CoordinateInfor>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  address: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  avatar: Scalars['String']['input'];
  coordinates?: InputMaybe<Coordinates>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type UserVerificationRequest = {
  __typename?: 'UserVerificationRequest';
  cardNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  criminalCheckFiles?: Maybe<Scalars['JSON']['output']>;
  dateRegister?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Scalars['JSON']['output']>;
  expiredDate?: Maybe<Scalars['Date']['output']>;
  governmentPhotoUrls?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  reasonDeny?: Maybe<Scalars['String']['output']>;
  selfiePhotoUrls?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Verification_Request_Status>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  vehicles?: Maybe<Array<VehicleVerification>>;
};

export enum Verification_Request_Status {
  Approved = 'Approved',
  Denied = 'Denied',
  NotVerify = 'Not_Verify',
  Pending = 'Pending'
}

export type VehicleVerification = {
  __typename?: 'VehicleVerification';
  brand?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  driverExpirationDate?: Maybe<Scalars['Date']['output']>;
  driverLicenseNumber?: Maybe<Scalars['String']['output']>;
  driverPhotoUrl?: Maybe<Scalars['JSON']['output']>;
  driverVerification?: Maybe<UserVerificationRequest>;
  driverVerificationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  insuranceExpirationDate?: Maybe<Scalars['Date']['output']>;
  insuranceNumber?: Maybe<Scalars['String']['output']>;
  insurancePhotoUrl?: Maybe<Scalars['JSON']['output']>;
  licensePlate?: Maybe<Scalars['String']['output']>;
  licensenPlatePhotoUrl?: Maybe<Scalars['JSON']['output']>;
  ownerName?: Maybe<Scalars['String']['output']>;
  regisVehicleExpirationDate?: Maybe<Scalars['Date']['output']>;
  regisVehicleLicenseNumber?: Maybe<Scalars['String']['output']>;
  regisVehiclePhotoUrl?: Maybe<Scalars['JSON']['output']>;
  transportation?: Maybe<Transportation>;
  transportationId?: Maybe<Scalars['String']['output']>;
  typeVehicle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
  yearOfManufacture?: Maybe<Scalars['Date']['output']>;
};

export type VehicleVerificationDto = {
  brand?: InputMaybe<Scalars['String']['input']>;
  driverExpirationDate?: InputMaybe<Scalars['Date']['input']>;
  driverLicenseNumber?: InputMaybe<Scalars['String']['input']>;
  driverPhotoUrl?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  insuranceExpirationDate?: InputMaybe<Scalars['Date']['input']>;
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  insurancePhotoUrl?: InputMaybe<Array<Scalars['String']['input']>>;
  licensePlate?: InputMaybe<Scalars['String']['input']>;
  licensenPlatePhotoUrl?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerName?: InputMaybe<Scalars['String']['input']>;
  regisVehicleExpirationDate?: InputMaybe<Scalars['Date']['input']>;
  regisVehicleLicenseNumber?: InputMaybe<Scalars['String']['input']>;
  regisVehiclePhotoUrl?: InputMaybe<Array<Scalars['String']['input']>>;
  transportationId?: InputMaybe<Scalars['String']['input']>;
  typeVehicle?: InputMaybe<Scalars['String']['input']>;
  yearOfManufacture?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateRecentlyTransportationDriverDto = {
  transportationIds: Array<Scalars['String']['input']>;
};

export type GetTransportationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<FilterDto> | FilterDto>;
  q?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTransportationsQuery = { __typename?: 'Query', getTransportations: { __typename?: 'ITransportations', meta: { __typename?: 'MetaPaginationInterface', totalItems: number, itemCount: number, currentPage: number, totalPages: number, itemsPerPage: number }, items: Array<{ __typename?: 'Transportation', id: string, name: string, description?: string | null, logoUrl?: string | null }> } };
