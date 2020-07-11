# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-space DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups, through: :groups_users
- has_many :messages
- has_many :group_users
//has_many :groups, through: :groups_usersで中間テーブルを経由

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null:false|
|group_id|integer|null: false|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :group_users
//has_many :users, through: :groups_usersで中間テーブルを経由

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

# フロント画像

<img width="1785" alt="430548a3ff939d40b5e10148a29d4269" src="https://user-images.githubusercontent.com/67730397/87219661-0f751c80-c398-11ea-9ac8-215af43e241b.png">
