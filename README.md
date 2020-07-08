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
|username|string|null: false|
### Association
- has_many :groups
- has_many :messages
// usersテーブルはmessagesテーブルに紐づいている（１対多）


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|user_id|integer|null: false, foreign_key: true|
|messages_id|integer|null:false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
// messagesテーブルはgroupテーブルに紐づいている（1対多）
// messagesテーブルはuserテーブルに紐づいている（1対多）


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments
- has_many :group_users
// groupテーブルはgroup_usersテーブルに紐づいている（多対多）
// groupテーブルはusersテーブルに紐づいている（1対多）
// groupテーブルはcommentsテーブルに紐づいている（1対多）


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
- has_many :groups
// groups_usersテーブルはgroupテーブルに紐づいている（多対多）
// groups_usersテーブルはusersテーブルに紐づいている（1対多）
// groups_usersテーブルはcommentsテーブルに紐づいている（1対多）