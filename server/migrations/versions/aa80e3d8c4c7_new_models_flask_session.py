"""New models & flask-session

Revision ID: aa80e3d8c4c7
Revises: bbbb2aec1041
Create Date: 2024-01-22 00:58:11.177822

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aa80e3d8c4c7'
down_revision = 'bbbb2aec1041'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('assignments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('assignment_name', sa.String(), nullable=False),
    sa.Column('topic', sa.String(), nullable=False),
    sa.Column('content', sa.String(), nullable=False),
    sa.Column('due_date', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('course_id', sa.Integer(), nullable=True),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['course_id'], ['courses.id'], ),
    sa.ForeignKeyConstraint(['student_id'], ['students.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('content')
    )
    op.create_table('report_cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('topic', sa.String(), nullable=False),
    sa.Column('grade', sa.Integer(), nullable=False),
    sa.Column('teacher_remarks', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('course_id', sa.Integer(), nullable=True),
    sa.Column('teacher_id', sa.Integer(), nullable=True),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['course_id'], ['courses.id'], ),
    sa.ForeignKeyConstraint(['student_id'], ['students.id'], ),
    sa.ForeignKeyConstraint(['teacher_id'], ['teachers.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('teacher_remarks')
    )
    with op.batch_alter_table('courses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.NVARCHAR(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('courses', schema=None) as batch_op:
        batch_op.drop_column('image_url')

    op.drop_table('report_cards')
    op.drop_table('assignments')
    # ### end Alembic commands ###
