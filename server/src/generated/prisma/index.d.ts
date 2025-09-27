
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Roll
 * 
 */
export type Roll = $Result.DefaultSelection<Prisma.$RollPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roll`: Exposes CRUD operations for the **Roll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rolls
    * const rolls = await prisma.roll.findMany()
    * ```
    */
  get roll(): Prisma.RollDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql


  /**
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Roll: 'Roll'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "roll"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Roll: {
        payload: Prisma.$RollPayload<ExtArgs>
        fields: Prisma.RollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          findFirst: {
            args: Prisma.RollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          findMany: {
            args: Prisma.RollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>[]
          }
          create: {
            args: Prisma.RollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          createMany: {
            args: Prisma.RollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>[]
          }
          delete: {
            args: Prisma.RollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          update: {
            args: Prisma.RollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          deleteMany: {
            args: Prisma.RollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>[]
          }
          upsert: {
            args: Prisma.RollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          aggregate: {
            args: Prisma.RollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoll>
          }
          groupBy: {
            args: Prisma.RollGroupByArgs<ExtArgs>
            result: $Utils.Optional<RollGroupByOutputType>[]
          }
          count: {
            args: Prisma.RollCountArgs<ExtArgs>
            result: $Utils.Optional<RollCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    roll?: RollOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roll: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roll?: boolean | UserCountOutputTypeCountRollArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    pfpBase64: string | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    pfpBase64: string | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    pfpBase64: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type UserSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type UserMinAggregateInputType = {
    id?: true | $Types.Skip
    pfpBase64?: true | $Types.Skip
    email?: true | $Types.Skip
    name?: true | $Types.Skip
  }

  export type UserMaxAggregateInputType = {
    id?: true | $Types.Skip
    pfpBase64?: true | $Types.Skip
    email?: true | $Types.Skip
    name?: true | $Types.Skip
  }

  export type UserCountAggregateInputType = {
    id?: true | $Types.Skip
    pfpBase64?: true | $Types.Skip
    email?: true | $Types.Skip
    name?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[] | $Types.Skip
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    pfpBase64: string | null
    email: string
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    pfpBase64?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    roll?: boolean | User$rollArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    pfpBase64?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    pfpBase64?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean | $Types.Skip
    pfpBase64?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pfpBase64" | "email" | "name", ExtArgs["result"]["user"], $Types.Skip>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roll?: boolean | User$rollArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roll: Prisma.$RollPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pfpBase64: string | null
      email: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roll<T extends User$rollArgs<ExtArgs> = {}>(args?: Subset<T, User$rollArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly pfpBase64: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User.roll
   */
  export type User$rollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    where?: RollWhereInput | $Types.Skip
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[] | $Types.Skip
    cursor?: RollWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: RollScalarFieldEnum | RollScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Roll
   */

  export type AggregateRoll = {
    _count: RollCountAggregateOutputType | null
    _avg: RollAvgAggregateOutputType | null
    _sum: RollSumAggregateOutputType | null
    _min: RollMinAggregateOutputType | null
    _max: RollMaxAggregateOutputType | null
  }

  export type RollAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    result: number | null
  }

  export type RollSumAggregateOutputType = {
    id: number | null
    userId: number | null
    result: number | null
  }

  export type RollMinAggregateOutputType = {
    id: number | null
    userId: number | null
    result: number | null
    type: string | null
    createdAt: Date | null
  }

  export type RollMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    result: number | null
    type: string | null
    createdAt: Date | null
  }

  export type RollCountAggregateOutputType = {
    id: number
    userId: number
    result: number
    type: number
    createdAt: number
    _all: number
  }


  export type RollAvgAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    result?: true | $Types.Skip
  }

  export type RollSumAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    result?: true | $Types.Skip
  }

  export type RollMinAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    result?: true | $Types.Skip
    type?: true | $Types.Skip
    createdAt?: true | $Types.Skip
  }

  export type RollMaxAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    result?: true | $Types.Skip
    type?: true | $Types.Skip
    createdAt?: true | $Types.Skip
  }

  export type RollCountAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    result?: true | $Types.Skip
    type?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type RollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roll to aggregate.
     */
    where?: RollWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rolls to fetch.
     */
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RollWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rolls from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rolls.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rolls
    **/
    _count?: true | RollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RollMaxAggregateInputType
  }

  export type GetRollAggregateType<T extends RollAggregateArgs> = {
        [P in keyof T & keyof AggregateRoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoll[P]>
      : GetScalarType<T[P], AggregateRoll[P]>
  }




  export type RollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollWhereInput | $Types.Skip
    orderBy?: RollOrderByWithAggregationInput | RollOrderByWithAggregationInput[] | $Types.Skip
    by: RollScalarFieldEnum[] | RollScalarFieldEnum
    having?: RollScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: RollCountAggregateInputType | true
    _avg?: RollAvgAggregateInputType
    _sum?: RollSumAggregateInputType
    _min?: RollMinAggregateInputType
    _max?: RollMaxAggregateInputType
  }

  export type RollGroupByOutputType = {
    id: number
    userId: number
    result: number
    type: string
    createdAt: Date
    _count: RollCountAggregateOutputType | null
    _avg: RollAvgAggregateOutputType | null
    _sum: RollSumAggregateOutputType | null
    _min: RollMinAggregateOutputType | null
    _max: RollMaxAggregateOutputType | null
  }

  type GetRollGroupByPayload<T extends RollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RollGroupByOutputType[P]>
            : GetScalarType<T[P], RollGroupByOutputType[P]>
        }
      >
    >


  export type RollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    result?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["roll"]>

  export type RollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    result?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["roll"]>

  export type RollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    result?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["roll"]>

  export type RollSelectScalar = {
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    result?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
  }

  export type RollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "result" | "type" | "createdAt", ExtArgs["result"]["roll"], $Types.Skip>
  export type RollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type RollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type RollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $RollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roll"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      result: number
      type: string
      createdAt: Date
    }, ExtArgs["result"]["roll"]>
    composites: {}
  }

  type RollGetPayload<S extends boolean | null | undefined | RollDefaultArgs> = $Result.GetResult<Prisma.$RollPayload, S>

  type RollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RollCountAggregateInputType | true
    }

  export interface RollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roll'], meta: { name: 'Roll' } }
    /**
     * Find zero or one Roll that matches the filter.
     * @param {RollFindUniqueArgs} args - Arguments to find a Roll
     * @example
     * // Get one Roll
     * const roll = await prisma.roll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RollFindUniqueArgs>(args: SelectSubset<T, RollFindUniqueArgs<ExtArgs>>): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RollFindUniqueOrThrowArgs} args - Arguments to find a Roll
     * @example
     * // Get one Roll
     * const roll = await prisma.roll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RollFindUniqueOrThrowArgs>(args: SelectSubset<T, RollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollFindFirstArgs} args - Arguments to find a Roll
     * @example
     * // Get one Roll
     * const roll = await prisma.roll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RollFindFirstArgs>(args?: SelectSubset<T, RollFindFirstArgs<ExtArgs>>): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollFindFirstOrThrowArgs} args - Arguments to find a Roll
     * @example
     * // Get one Roll
     * const roll = await prisma.roll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RollFindFirstOrThrowArgs>(args?: SelectSubset<T, RollFindFirstOrThrowArgs<ExtArgs>>): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rolls
     * const rolls = await prisma.roll.findMany()
     * 
     * // Get first 10 Rolls
     * const rolls = await prisma.roll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rollWithIdOnly = await prisma.roll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RollFindManyArgs>(args?: SelectSubset<T, RollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roll.
     * @param {RollCreateArgs} args - Arguments to create a Roll.
     * @example
     * // Create one Roll
     * const Roll = await prisma.roll.create({
     *   data: {
     *     // ... data to create a Roll
     *   }
     * })
     * 
     */
    create<T extends RollCreateArgs>(args: SelectSubset<T, RollCreateArgs<ExtArgs>>): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rolls.
     * @param {RollCreateManyArgs} args - Arguments to create many Rolls.
     * @example
     * // Create many Rolls
     * const roll = await prisma.roll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RollCreateManyArgs>(args?: SelectSubset<T, RollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rolls and returns the data saved in the database.
     * @param {RollCreateManyAndReturnArgs} args - Arguments to create many Rolls.
     * @example
     * // Create many Rolls
     * const roll = await prisma.roll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rolls and only return the `id`
     * const rollWithIdOnly = await prisma.roll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RollCreateManyAndReturnArgs>(args?: SelectSubset<T, RollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roll.
     * @param {RollDeleteArgs} args - Arguments to delete one Roll.
     * @example
     * // Delete one Roll
     * const Roll = await prisma.roll.delete({
     *   where: {
     *     // ... filter to delete one Roll
     *   }
     * })
     * 
     */
    delete<T extends RollDeleteArgs>(args: SelectSubset<T, RollDeleteArgs<ExtArgs>>): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roll.
     * @param {RollUpdateArgs} args - Arguments to update one Roll.
     * @example
     * // Update one Roll
     * const roll = await prisma.roll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RollUpdateArgs>(args: SelectSubset<T, RollUpdateArgs<ExtArgs>>): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rolls.
     * @param {RollDeleteManyArgs} args - Arguments to filter Rolls to delete.
     * @example
     * // Delete a few Rolls
     * const { count } = await prisma.roll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RollDeleteManyArgs>(args?: SelectSubset<T, RollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rolls
     * const roll = await prisma.roll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RollUpdateManyArgs>(args: SelectSubset<T, RollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rolls and returns the data updated in the database.
     * @param {RollUpdateManyAndReturnArgs} args - Arguments to update many Rolls.
     * @example
     * // Update many Rolls
     * const roll = await prisma.roll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rolls and only return the `id`
     * const rollWithIdOnly = await prisma.roll.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RollUpdateManyAndReturnArgs>(args: SelectSubset<T, RollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roll.
     * @param {RollUpsertArgs} args - Arguments to update or create a Roll.
     * @example
     * // Update or create a Roll
     * const roll = await prisma.roll.upsert({
     *   create: {
     *     // ... data to create a Roll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roll we want to update
     *   }
     * })
     */
    upsert<T extends RollUpsertArgs>(args: SelectSubset<T, RollUpsertArgs<ExtArgs>>): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollCountArgs} args - Arguments to filter Rolls to count.
     * @example
     * // Count the number of Rolls
     * const count = await prisma.roll.count({
     *   where: {
     *     // ... the filter for the Rolls we want to count
     *   }
     * })
    **/
    count<T extends RollCountArgs>(
      args?: Subset<T, RollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RollAggregateArgs>(args: Subset<T, RollAggregateArgs>): Prisma.PrismaPromise<GetRollAggregateType<T>>

    /**
     * Group by Roll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RollGroupByArgs['orderBy'] }
        : { orderBy?: RollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roll model
   */
  readonly fields: RollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roll model
   */
  interface RollFieldRefs {
    readonly id: FieldRef<"Roll", 'Int'>
    readonly userId: FieldRef<"Roll", 'Int'>
    readonly result: FieldRef<"Roll", 'Int'>
    readonly type: FieldRef<"Roll", 'String'>
    readonly createdAt: FieldRef<"Roll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roll findUnique
   */
  export type RollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Roll to fetch.
     */
    where: RollWhereUniqueInput
  }

  /**
   * Roll findUniqueOrThrow
   */
  export type RollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Roll to fetch.
     */
    where: RollWhereUniqueInput
  }

  /**
   * Roll findFirst
   */
  export type RollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Roll to fetch.
     */
    where?: RollWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rolls to fetch.
     */
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rolls.
     */
    cursor?: RollWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rolls from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rolls.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rolls.
     */
    distinct?: RollScalarFieldEnum | RollScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Roll findFirstOrThrow
   */
  export type RollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Roll to fetch.
     */
    where?: RollWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rolls to fetch.
     */
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rolls.
     */
    cursor?: RollWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rolls from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rolls.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rolls.
     */
    distinct?: RollScalarFieldEnum | RollScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Roll findMany
   */
  export type RollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Rolls to fetch.
     */
    where?: RollWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rolls to fetch.
     */
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rolls.
     */
    cursor?: RollWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rolls from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rolls.
     */
    skip?: number | $Types.Skip
    distinct?: RollScalarFieldEnum | RollScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Roll create
   */
  export type RollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * The data needed to create a Roll.
     */
    data: XOR<RollCreateInput, RollUncheckedCreateInput>
  }

  /**
   * Roll createMany
   */
  export type RollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rolls.
     */
    data: RollCreateManyInput | RollCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Roll createManyAndReturn
   */
  export type RollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * The data used to create many Rolls.
     */
    data: RollCreateManyInput | RollCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roll update
   */
  export type RollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * The data needed to update a Roll.
     */
    data: XOR<RollUpdateInput, RollUncheckedUpdateInput>
    /**
     * Choose, which Roll to update.
     */
    where: RollWhereUniqueInput
  }

  /**
   * Roll updateMany
   */
  export type RollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rolls.
     */
    data: XOR<RollUpdateManyMutationInput, RollUncheckedUpdateManyInput>
    /**
     * Filter which Rolls to update
     */
    where?: RollWhereInput | $Types.Skip
    /**
     * Limit how many Rolls to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Roll updateManyAndReturn
   */
  export type RollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * The data used to update Rolls.
     */
    data: XOR<RollUpdateManyMutationInput, RollUncheckedUpdateManyInput>
    /**
     * Filter which Rolls to update
     */
    where?: RollWhereInput | $Types.Skip
    /**
     * Limit how many Rolls to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roll upsert
   */
  export type RollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * The filter to search for the Roll to update in case it exists.
     */
    where: RollWhereUniqueInput
    /**
     * In case the Roll found by the `where` argument doesn't exist, create a new Roll with this data.
     */
    create: XOR<RollCreateInput, RollUncheckedCreateInput>
    /**
     * In case the Roll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RollUpdateInput, RollUncheckedUpdateInput>
  }

  /**
   * Roll delete
   */
  export type RollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter which Roll to delete.
     */
    where: RollWhereUniqueInput
  }

  /**
   * Roll deleteMany
   */
  export type RollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rolls to delete
     */
    where?: RollWhereInput | $Types.Skip
    /**
     * Limit how many Rolls to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Roll without action
   */
  export type RollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roll
     */
    omit?: RollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    pfpBase64: 'pfpBase64',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RollScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    result: 'result',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type RollScalarFieldEnum = (typeof RollScalarFieldEnum)[keyof typeof RollScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    id?: IntFilter<"User"> | number | $Types.Skip
    pfpBase64?: StringNullableFilter<"User"> | string | null | $Types.Skip
    email?: StringFilter<"User"> | string | $Types.Skip
    name?: StringFilter<"User"> | string | $Types.Skip
    roll?: RollListRelationFilter | $Types.Skip
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    pfpBase64?: SortOrderInput | SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    roll?: RollOrderByRelationAggregateInput | $Types.Skip
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    email?: string | $Types.Skip
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    pfpBase64?: StringNullableFilter<"User"> | string | null | $Types.Skip
    name?: StringFilter<"User"> | string | $Types.Skip
    roll?: RollListRelationFilter | $Types.Skip
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    pfpBase64?: SortOrderInput | SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    _count?: UserCountOrderByAggregateInput | $Types.Skip
    _avg?: UserAvgOrderByAggregateInput | $Types.Skip
    _max?: UserMaxOrderByAggregateInput | $Types.Skip
    _min?: UserMinOrderByAggregateInput | $Types.Skip
    _sum?: UserSumOrderByAggregateInput | $Types.Skip
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"User"> | number | $Types.Skip
    pfpBase64?: StringNullableWithAggregatesFilter<"User"> | string | null | $Types.Skip
    email?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
  }

  export type RollWhereInput = {
    AND?: RollWhereInput | RollWhereInput[] | $Types.Skip
    OR?: RollWhereInput[] | $Types.Skip
    NOT?: RollWhereInput | RollWhereInput[] | $Types.Skip
    id?: IntFilter<"Roll"> | number | $Types.Skip
    userId?: IntFilter<"Roll"> | number | $Types.Skip
    result?: IntFilter<"Roll"> | number | $Types.Skip
    type?: StringFilter<"Roll"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Roll"> | Date | string | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type RollOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    result?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type RollWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: RollWhereInput | RollWhereInput[] | $Types.Skip
    OR?: RollWhereInput[] | $Types.Skip
    NOT?: RollWhereInput | RollWhereInput[] | $Types.Skip
    userId?: IntFilter<"Roll"> | number | $Types.Skip
    result?: IntFilter<"Roll"> | number | $Types.Skip
    type?: StringFilter<"Roll"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Roll"> | Date | string | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id">

  export type RollOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    result?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    _count?: RollCountOrderByAggregateInput | $Types.Skip
    _avg?: RollAvgOrderByAggregateInput | $Types.Skip
    _max?: RollMaxOrderByAggregateInput | $Types.Skip
    _min?: RollMinOrderByAggregateInput | $Types.Skip
    _sum?: RollSumOrderByAggregateInput | $Types.Skip
  }

  export type RollScalarWhereWithAggregatesInput = {
    AND?: RollScalarWhereWithAggregatesInput | RollScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: RollScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: RollScalarWhereWithAggregatesInput | RollScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Roll"> | number | $Types.Skip
    userId?: IntWithAggregatesFilter<"Roll"> | number | $Types.Skip
    result?: IntWithAggregatesFilter<"Roll"> | number | $Types.Skip
    type?: StringWithAggregatesFilter<"Roll"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Roll"> | Date | string | $Types.Skip
  }

  export type UserCreateInput = {
    pfpBase64?: string | null | $Types.Skip
    email: string
    name: string
    roll?: RollCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateInput = {
    id?: number | $Types.Skip
    pfpBase64?: string | null | $Types.Skip
    email: string
    name: string
    roll?: RollUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUpdateInput = {
    pfpBase64?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roll?: RollUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    pfpBase64?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roll?: RollUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserCreateManyInput = {
    id?: number | $Types.Skip
    pfpBase64?: string | null | $Types.Skip
    email: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    pfpBase64?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    pfpBase64?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type RollCreateInput = {
    result: number
    type: string
    createdAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutRollInput
  }

  export type RollUncheckedCreateInput = {
    id?: number | $Types.Skip
    userId: number
    result: number
    type: string
    createdAt?: Date | string | $Types.Skip
  }

  export type RollUpdateInput = {
    result?: IntFieldUpdateOperationsInput | number | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutRollNestedInput | $Types.Skip
  }

  export type RollUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    userId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    result?: IntFieldUpdateOperationsInput | number | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type RollCreateManyInput = {
    id?: number | $Types.Skip
    userId: number
    result: number
    type: string
    createdAt?: Date | string | $Types.Skip
  }

  export type RollUpdateManyMutationInput = {
    result?: IntFieldUpdateOperationsInput | number | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type RollUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    userId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    result?: IntFieldUpdateOperationsInput | number | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type RollListRelationFilter = {
    every?: RollWhereInput | $Types.Skip
    some?: RollWhereInput | $Types.Skip
    none?: RollWhereInput | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type RollOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    pfpBase64?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    pfpBase64?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    pfpBase64?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput | $Types.Skip
    isNot?: UserWhereInput | $Types.Skip
  }

  export type RollCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    result?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type RollAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    result?: SortOrder | $Types.Skip
  }

  export type RollMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    result?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type RollMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    result?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type RollSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    result?: SortOrder | $Types.Skip
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type RollCreateNestedManyWithoutUserInput = {
    create?: XOR<RollCreateWithoutUserInput, RollUncheckedCreateWithoutUserInput> | RollCreateWithoutUserInput[] | RollUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: RollCreateOrConnectWithoutUserInput | RollCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: RollCreateManyUserInputEnvelope | $Types.Skip
    connect?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
  }

  export type RollUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RollCreateWithoutUserInput, RollUncheckedCreateWithoutUserInput> | RollCreateWithoutUserInput[] | RollUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: RollCreateOrConnectWithoutUserInput | RollCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: RollCreateManyUserInputEnvelope | $Types.Skip
    connect?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type RollUpdateManyWithoutUserNestedInput = {
    create?: XOR<RollCreateWithoutUserInput, RollUncheckedCreateWithoutUserInput> | RollCreateWithoutUserInput[] | RollUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: RollCreateOrConnectWithoutUserInput | RollCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: RollUpsertWithWhereUniqueWithoutUserInput | RollUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: RollCreateManyUserInputEnvelope | $Types.Skip
    set?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
    disconnect?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
    delete?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
    connect?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
    update?: RollUpdateWithWhereUniqueWithoutUserInput | RollUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: RollUpdateManyWithWhereWithoutUserInput | RollUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: RollScalarWhereInput | RollScalarWhereInput[] | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type RollUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RollCreateWithoutUserInput, RollUncheckedCreateWithoutUserInput> | RollCreateWithoutUserInput[] | RollUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: RollCreateOrConnectWithoutUserInput | RollCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: RollUpsertWithWhereUniqueWithoutUserInput | RollUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: RollCreateManyUserInputEnvelope | $Types.Skip
    set?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
    disconnect?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
    delete?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
    connect?: RollWhereUniqueInput | RollWhereUniqueInput[] | $Types.Skip
    update?: RollUpdateWithWhereUniqueWithoutUserInput | RollUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: RollUpdateManyWithWhereWithoutUserInput | RollUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: RollScalarWhereInput | RollScalarWhereInput[] | $Types.Skip
  }

  export type UserCreateNestedOneWithoutRollInput = {
    create?: XOR<UserCreateWithoutRollInput, UserUncheckedCreateWithoutRollInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutRollInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutRollNestedInput = {
    create?: XOR<UserCreateWithoutRollInput, UserUncheckedCreateWithoutRollInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutRollInput | $Types.Skip
    upsert?: UserUpsertWithoutRollInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRollInput, UserUpdateWithoutRollInput>, UserUncheckedUpdateWithoutRollInput> | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type RollCreateWithoutUserInput = {
    result: number
    type: string
    createdAt?: Date | string | $Types.Skip
  }

  export type RollUncheckedCreateWithoutUserInput = {
    id?: number | $Types.Skip
    result: number
    type: string
    createdAt?: Date | string | $Types.Skip
  }

  export type RollCreateOrConnectWithoutUserInput = {
    where: RollWhereUniqueInput
    create: XOR<RollCreateWithoutUserInput, RollUncheckedCreateWithoutUserInput>
  }

  export type RollCreateManyUserInputEnvelope = {
    data: RollCreateManyUserInput | RollCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type RollUpsertWithWhereUniqueWithoutUserInput = {
    where: RollWhereUniqueInput
    update: XOR<RollUpdateWithoutUserInput, RollUncheckedUpdateWithoutUserInput>
    create: XOR<RollCreateWithoutUserInput, RollUncheckedCreateWithoutUserInput>
  }

  export type RollUpdateWithWhereUniqueWithoutUserInput = {
    where: RollWhereUniqueInput
    data: XOR<RollUpdateWithoutUserInput, RollUncheckedUpdateWithoutUserInput>
  }

  export type RollUpdateManyWithWhereWithoutUserInput = {
    where: RollScalarWhereInput
    data: XOR<RollUpdateManyMutationInput, RollUncheckedUpdateManyWithoutUserInput>
  }

  export type RollScalarWhereInput = {
    AND?: RollScalarWhereInput | RollScalarWhereInput[] | $Types.Skip
    OR?: RollScalarWhereInput[] | $Types.Skip
    NOT?: RollScalarWhereInput | RollScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Roll"> | number | $Types.Skip
    userId?: IntFilter<"Roll"> | number | $Types.Skip
    result?: IntFilter<"Roll"> | number | $Types.Skip
    type?: StringFilter<"Roll"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Roll"> | Date | string | $Types.Skip
  }

  export type UserCreateWithoutRollInput = {
    pfpBase64?: string | null | $Types.Skip
    email: string
    name: string
  }

  export type UserUncheckedCreateWithoutRollInput = {
    id?: number | $Types.Skip
    pfpBase64?: string | null | $Types.Skip
    email: string
    name: string
  }

  export type UserCreateOrConnectWithoutRollInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRollInput, UserUncheckedCreateWithoutRollInput>
  }

  export type UserUpsertWithoutRollInput = {
    update: XOR<UserUpdateWithoutRollInput, UserUncheckedUpdateWithoutRollInput>
    create: XOR<UserCreateWithoutRollInput, UserUncheckedCreateWithoutRollInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutRollInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutRollInput, UserUncheckedUpdateWithoutRollInput>
  }

  export type UserUpdateWithoutRollInput = {
    pfpBase64?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutRollInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    pfpBase64?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type RollCreateManyUserInput = {
    id?: number | $Types.Skip
    result: number
    type: string
    createdAt?: Date | string | $Types.Skip
  }

  export type RollUpdateWithoutUserInput = {
    result?: IntFieldUpdateOperationsInput | number | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type RollUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    result?: IntFieldUpdateOperationsInput | number | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type RollUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    result?: IntFieldUpdateOperationsInput | number | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}